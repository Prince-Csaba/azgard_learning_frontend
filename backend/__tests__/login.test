const http = require('axios');
// AAA/1 Axios mock adapter
const MockAdapter = require("axios-mock-adapter");

// AAA/2 axios mock adapter
//sets the mock adapter on the our instance
const mock = new MockAdapter(http);

//AAA/3 Axios mock adapter
//Mock any GET request to /users
//arguments for reply are (status, data, headers)
mock.onPost("https://oauth2.googleapis.com/token%22").reply(200, {access_token: 'IDEBEMÁSOLODAZ ACESSTOKENT',
  expires_in: 3599,
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
  token_type: 'Bearer',
  id_token: 'IDEMEGAZTAHOSSZÚIDTOKNENT
});


describe("GET - api/login tests", () => {
  it("should return 200", async () => {
    //given
    //sends GET request to /test endpoint

    //when
    // console.log(process.env.NODE_ENV);
    //console.log(process.env.JWT_SECRET);
    const response = await request.get("/login?code=alma");

    //then
    expect(response.status).toBe(200);
  });
});