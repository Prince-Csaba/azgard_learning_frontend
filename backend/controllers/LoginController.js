const axios = require('axios');
const { uniqueUser } = require('./UniqueController');

exports.googleLogin = (req, res) => {
  const code = req.body.code;

  const url = 'https://oauth2.googleapis.com/token';

  console.log(code)

  const body = {
    code,
    client_id: '657899331675-fr3vkhlvd1836sd7t1id2c9ik2pu3hen.apps.googleusercontent.com',
    client_secret: 'lQmYXb9e8sf85S0ZbIZruuDN',
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
