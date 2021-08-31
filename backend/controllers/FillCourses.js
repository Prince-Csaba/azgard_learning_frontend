const fs = require('fs');
const Lessons = require("../models/lesson.model");

exports.fillCourses =  async (req, res) => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('./Data/Courses/foundations.json', 'utf8'));
  
  const filter = { title: data.title };
  const update = { title: data.title, lessons: data.lessons };

//  console.log(filter, update);

  await Lessons.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  });

} catch (err) {
  console.error(err)
}
  if (res) res.status(200).json({data: "Courses Set"})
}
