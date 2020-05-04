import moment from "moment";
import { fetchExercises } from "../api/exercises";

const Sitemap = () => null;
Sitemap.getInitialProps = async ctx => {
  const hostname = "https://gym.casply.com";
  let content = "";
  const addUrl = ({
    url = "",
    updated_at = "",
    changefreq = "daily",
    priority = "0.5"
  } = {}) =>
    (content += `<url><loc>${hostname}${url}</loc><lastmod>${moment(
      updated_at
    ).format(
      "YYYY-MM-DD"
    )}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`);

  const { res } = ctx;
  if (!res) return {};
  res.setHeader("content-type", "application/xml");
  const result = await fetchExercises();
  result.exercises.list.forEach(({ id, updated_at }) =>
    addUrl({ url: `/ru/exercises/${id}`, updated_at })
  );
  result.exercises.list.forEach(({ id, updated_at }) =>
      addUrl({ url: `/en/exercises/${id}`, updated_at })
  );
  res.setHeader("content-type", "application/xml");
  res.end(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</urlset>`
  );
  return {};
};
export default Sitemap;
