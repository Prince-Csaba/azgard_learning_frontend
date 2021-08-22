const User = require("../models/user.model");

exports.getProgress = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(404).json({error: "e-mail is missing"});
  }

 console.log("Google email:", email);
 
  const userProgress = await User.findOne({email})
  
//  console.log(userProgress.courses.foundations);

  return res.status(200).json(userProgress.courses.foundations)
}

