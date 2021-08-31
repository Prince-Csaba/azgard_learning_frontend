const axios = require('axios');
const { uniqueUser } = require('./UniqueController');

exports.googleLogin = (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(401).json({error: "Code missing"})
  }

  const url = 'https://oauth2.googleapis.com/token';

  console.log(`This is the code: ${code}`)

  const body = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/login',
    grant_type: 'authorization_code',
  };

  let config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(url, body, config)
    .then((response) => {
      uniqueUser(response.data, res);
    })
    .catch((err) => console.log(err.response.data));
};
