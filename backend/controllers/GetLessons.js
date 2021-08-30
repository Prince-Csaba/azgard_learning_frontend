const Lesson = require("../models/lesson.model");

exports.getLessons =  async (req, res) => {
  console.log('Here!!!');
  let myClasses = await Lesson.find();
  console.log("This are my classes:", myClasses);
  if (Object.entries(myClasses).length === 0) {
    return res.status(404).json({error: "no lessons found"});
  }

  myClasses = myClasses[0];
//  console.log(myClasses);
  res.status(200).json({ myClasses });
}