const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

exports.deleteUser = async (req, res) => {
  let thisUser;
  try {
    thisUser = jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(404).json({error: "user not existing"});
  }

 console.log("Google_id:", thisUser.google_id);
 
  await User.deleteOne({google_id: thisUser.google_id})
  
  return res.status(200).json({message: "User deleted"})
}

