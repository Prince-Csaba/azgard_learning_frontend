const Lesson = require("../models/lesson.model");

exports.getLessons =  async function(req, res, next) {
  let myClasses;
  myClasses = await Lesson.find({});
  myClasses = myClasses[0];
  console.log(myClasses);
  res.json({ myClasses });
};