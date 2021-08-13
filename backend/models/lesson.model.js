const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String
  },
  lessons: {
    type: Array,
    required: true,
    unique: true,
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema, "basic_class");

module.exports = Lesson;