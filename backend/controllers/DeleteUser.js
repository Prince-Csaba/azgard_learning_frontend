const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

exports.deleteUser = async (req, res) => {
  let thisUser;
  try {
    thisUser = jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(401).json({error: "Wrong or not existing token"});
  }
 
  let deleteRes = await User.deleteOne({google_id: thisUser.google_id})
  
  console.log(deleteRes);

  if (deleteRes.deletedCount !== 1) {
    return res.status(404).json({error: "Something went wrong"});
  }
  
  return res.status(200).json({message: "User deleted"})
}

