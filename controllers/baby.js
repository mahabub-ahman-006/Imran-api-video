const { errorHandler } = require("../utils");

exports.baby = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/video/baby.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"Mohammad Imran","data" : `${link}`, "url" : `${link}`});
};