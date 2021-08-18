/* const User = require("../models/user.model"); */

exports.getProgress = async (req, res) => {
  const google_id = req.body;

  console.log(req.body.google_id);

/*   const UserProgress = await User.find({user_id})
  console.log(UserProgress)
 */
  return res.json(req.body)
/*   return res.json(UserProgress) */

}

