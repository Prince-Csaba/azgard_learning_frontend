const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  title: {
    type: String
  },
  lessons: {
    type: Object,
    required: true,
    unique: true,
  },
});

const Class = mongoose.model("Class", classSchema, "basic_class");

module.exports = Class;