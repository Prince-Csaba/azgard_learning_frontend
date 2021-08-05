const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

const User = mongoose.model("User", userSchema, "authEntity");

module.exports = User;
