const Lesson = require("../models/lesson.model");

exports.getLessons =  async (req, res, next) => {
  let myClasses;
  myClasses = await Lesson.find({});
  myClasses = myClasses[0];
  console.log(myClasses);
  res.status(200).json({ myClasses });
}