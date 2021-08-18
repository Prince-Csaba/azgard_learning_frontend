const User = require("../models/user.model");

exports.getProgress = async (req, res) => {
  const email = Object.keys(req.body)[0];

  console.log("Google email:", email);

  const userProgress = await User.find({email})
  console.log(userProgress[0].basic_class)

  return res.json(userProgress[0].basic_class)
}

