const { errorHandler } = require("../utils");
const fs = require("fs");
const path = require("path");

const controllersPath = path.join(__dirname, "../controllers");

exports.home = async (req, res, next) => {
  const apiUrls = fs.readdirSync(controllersPath)
    .map(file => path.parse(file).name.toLowerCase())
    .reduce((acc, api) => ({ ...acc, [api]: `Imran.Video-api/${api}` }), {});

  const jsonString = `========== IMRAN API =========\n
${Object.entries(apiUrls).map(([api, url]) => `${api}:  ${url}`).join("\n\n")}\n========== [ COPYRIGHT ] ==========\n𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧\nFacebook: https://www.facebook.com/Imran.Ahmed099`;

  res.set('Content-Type', 'application/json');
  res.send(jsonString);
};