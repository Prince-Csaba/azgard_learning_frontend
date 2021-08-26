const mongoose = require("mongoose");

const foundationSchema = new mongoose.Schema({
   foundations: {
    type: Array,
    default: [
      "Act",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
    ],
  }
})

const courseSchema = new mongoose.Schema({
  foundations : {
    type: foundationSchema,
    default: () => ({})
  }
});

const userSchema = new mongoose.Schema({
  google_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  given_name: {
    type: String,
  },
  nick_name: {
    type: String,
    default: "*"
  },
  level: {
    type: Number,
  },
  basic_class: {
    type: Object,
    required: true,
    default: [
      "Act",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
      "Next",
    ]
  },
  courses: {
    type: foundationSchema,
    default: () => ({})
  }
});

const User = mongoose.model("User", userSchema, "google-users");

module.exports = User;
