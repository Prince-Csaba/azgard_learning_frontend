const mongoose = require("mongoose");

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
  name: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: Number,
  },
  basic_class: {
    type: Object,
  }
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
