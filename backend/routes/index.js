var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

const User = require("../models/user.model");

User.find({})
.then(res => console.log(res));

const Class = require("../models/class.model");

let myClasses;

let getClass = async () => {
myClasses = await Class.find({});
myClasses = myClasses[0];
console.log(myClasses);
}

getClass();

router.get('/api/classes', function(req, res, next) {
  res.json({ myClasses });
});

const courses = require('../old/file/courses.json');

/* express.use(express.static('file')); */

router.get('/old', (req, res) => {
  res.json(courses);
});

module.exports = router;
