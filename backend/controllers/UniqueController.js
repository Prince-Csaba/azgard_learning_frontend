const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.uniqueUser = async (data, res) => {
  const usertoken = jwt_decode(data.id_token);

  // Check if user already exist
  const email = await User.findOne({ email: usertoken.email });
  if (!email) {
    const user = new User({
      google_id: usertoken.sub,
      full_name: usertoken.name,
      given_name: usertoken.given_name,
      email: usertoken.email,
      picture: usertoken.picture
    });

    await user.save();
  } else {
    console.log('Email already exists!');
  }

  // Create and assign a token
  const token = jwt.sign({ google_id: usertoken.sub, full_name: usertoken.name, email: usertoken.email, picture: usertoken.picture }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 });

  console.log(`This is the token: ${token}`);
  res.status(200).send(token);
};