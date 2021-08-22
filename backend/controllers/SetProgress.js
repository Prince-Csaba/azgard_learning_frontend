const User = require("../models/user.model");

exports.setProgress = async (req, res) => {
  const {email, progress} = req.body;

  if (!email) {
    return res.status(404).json({error: "e-mail is missing"});
  } else if (!progress) {
    return res.status(404).json({error: "progress array is missing"});
  }

  const userProgress = await User.findOne({email})
  userProgress.courses.foundations = progress
  await userProgress.save()
  console.log(userProgress)

  return res.status(200).json({ data: "Progress Set"})
}

