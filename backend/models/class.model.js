const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  first_ten_lessons: {
    type: Object,
    required: true,
    unique: true,
  },
});

const Class = mongoose.model("Class", userSchema, "basic_class");

module.exports = Class;