const express = require('express');
const router = express.Router();

const { googleLogin } = require('../controllers/LoginController');

const { getLessons } = require('../controllers/GetLessons');
const { getQuote } = require('../controllers/GetQuote');
const { getProgress } = require('../controllers/GetProgress');
const { setProgress } = require('../controllers/SetProgress');

const { fillCourses } = require('../controllers/FillCourses');
const courses = require('../old/file/courses.json');

const User = require("../models/user.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/api/lessons', getLessons);

router.get('/api/quote', getQuote);

router.post('/api/progress', getProgress);

router.post('/api/setprogress', setProgress);

router.post('/api/login', googleLogin);

router.get('/api/fillcourse', fillCourses);

/* express.use(express.static('file')); 
router.get('/old', (req, res) => {
  res.json(courses);
});
*/
module.exports = router;
