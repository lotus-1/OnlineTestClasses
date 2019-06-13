const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dataBase = require('./../model');
const { celebrate } = require('celebrate');
const  register = require('../views/register');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const hashingPassword = require('../helpers/hashing');
const router = express.Router();
const getData  = require('../database/queries/getData');
const cookieParser = require('cookie-parser');
const app = express();
//
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
   res.cookie('logged_in', true, { HttpOnly, 'Max-Age': 9000 });
   console.log(req.headers.cookie);
});


router.get('/', (req, res) => {
  res.render('home'), {
    title: 'home page',
    username: 'user'
  }
});

router.post('/', (req, res) => {
  res.redirect('/class')
})
router.get('/students', (req,res) => {
 getData((err, result) => {
    if (err) return err;
    res.json(result)
  });
});


router.get('/register', validate(signupValidation), (req, res) => {
  res.render('register');
});

router.post('/register', validate(signupValidation), (req, res) => {
  res.render('register');
});


router.post('/class', validate(loginValidation), (req, res) => {
  res.render('class');

})

router.get('/seventhGrade', (req, res) => {
  res.render('seventhGrade');
});
router.post('/seventhGrade', (req, res) => {
  res.render('seventhGrade');
});
router.get('/eightGrade', (req, res) => {
  res.render('eightGrade');
});

router.post('/eightGrade', (req, res) => {
  res.render('eightGrade');
});

router.get('/ninethGrade', (req, res) => {
  res.render('ninethGrade');
});

router.post('/ninethGrade', (req, res) => {
  res.render('ninethGrade');
});


module.exports = router;
