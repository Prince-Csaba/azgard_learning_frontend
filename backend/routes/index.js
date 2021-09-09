const express = require('express');
const router = express.Router();

const { googleLogin } = require('../controllers/LoginController');

const { getLessons } = require('../controllers/GetLessons');
const { getQuote } = require('../controllers/GetQuote');
const { getProgress } = require('../controllers/GetProgress');
const { setProgress } = require('../controllers/SetProgress');

/* const { fillCourses } = require('../controllers/FillCourses');
const { fillQuotes } = require('../controllers/FillQuotes'); */

const { testController } = require('../controllers/TestController');

const { deleteUser } = require('../controllers/DeleteUser');

const courses = require('../old/file/courses.json');

const User = require("../models/user.model");

router.get('/test', testController);

router.get('/lessons', getLessons);

router.get('/quote', getQuote);

router.post('/progress', getProgress);

router.post('/setprogress', setProgress);

router.post('/login', googleLogin);

/* router.get('/fillcourses', fillCourses);

router.get('/fillquotes', fillQuotes); */

router.delete('/deleteuser', deleteUser);

/* express.use(express.static('file')); 
router.get('/old', (req, res) => {
  res.json(courses);
});
*/
module.exports = router;
