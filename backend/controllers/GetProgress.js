const User = require("../models/user.model");

exports.getProgress = async (req, res) => {
  const email = Object.keys(req.body)[0];

  console.log("Google email:", email);

  const UserProgress = await User.find({email})
  console.log(UserProgress[0].basic_class)

  return res.json(UserProgress[0].basic_class)
}

