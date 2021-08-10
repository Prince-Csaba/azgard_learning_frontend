var express = require('express');
var router = express.Router();

const Class = require("../models/class.model");
const courses = require('../old/file/courses.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

const User = require("../models/user.model");

let getUser = async () => {
  thisUser = await User.find({});
  thisUser = thisUser[0].basic_class;
  console.log(thisUser);
}

getUser();

router.get('/api/user', function(req, res, next) {
  res.json({ thisUser });
});


router.get('/api/classes', async function(req, res, next) {
  let myClasses;
  myClasses = await Class.find({});
  myClasses = myClasses[0];
  console.log(myClasses);
  res.json({ myClasses });
});


/* express.use(express.static('file')); */

router.get('/old', (req, res) => {
  res.json(courses);
});

module.exports = router;
