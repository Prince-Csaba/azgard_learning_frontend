const express = require("express");
const app = express();
const cors = require('cors');

const port = 8000;
const courses = require('./file/courses.json');

app.use(express.static('file'));

app.get('/', cors(), (req, res) => {
  res.json(courses);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})