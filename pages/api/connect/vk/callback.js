import axios from "axios";

const handler = async (req, res) => {
  try {
    const result = await axios({
      url: process.env.VK_SERVER_URL,
      headers: {
        "Content-type": "application/json"
      },
      params: {
        code: req.query.code
      },
      method: "GET",
      data: null
    }).then(({ data }) => {
      return data;
    });
    const { token } = result;
    if (!token) {
      throw new Error("");
    }
    res.writeHead(302, {
      Location: `/ru/?secret_token=${token}`
    });
    res.end();
  } catch (e) {
    res.statusCode = 400;
    res.end(JSON.stringify({ errors: "Auth error", error_desc: e.message }));
  }
};

export default handler;
