const fs = require('fs');
const Lessons = require("../models/lesson.model");


const fillCourses =  async (req, res, next) => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('../Courses/foundations.json', 'utf8'));
    console.log(data)
  } catch (err) {
    console.error(err)
  }

/*   await Lessons.create(data, function (err, succes) {
    if (err) return handleError(err);
    console.log('data saved');
  }); */
}

fillCourses();
