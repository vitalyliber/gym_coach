require("dotenv").config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    VK_CLIENT_ID: process.env.VK_CLIENT_ID,
    VK_CLIENT_SECRET: process.env.VK_CLIENT_SECRET,
    VK_REDIRECT_URL: process.env.VK_REDIRECT_URL
  }
};
