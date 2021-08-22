const User = require("../models/user.model");

exports.setProgress = async (req, res) => {
  const {email, progress} = req.body;

  const userProgress = await User.findOne({email})
  userProgress.basic_class = progress
  await userProgress.save()
  console.log(userProgress)

  return res.status(200).json({ data: "Progress Set"})
}

