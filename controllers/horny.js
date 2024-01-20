const { errorHandler } = require("../utils");

exports.horny = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/video/horny.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"Mohammad Imran","data" : `${link}`, "url" : `${link}`});
};