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

router.get('/', (req, res) => {
  res.render('home'), {
    title: 'home page',
    username: 'user'
  }
});

router.post('/', (req, res) => {
  res.redirect('/class')
})

router.get('/register', validate(signupValidation), (req, res) => {
  res.render('register');
});

router.post('/register', validate(signupValidation), (req, res) => {
  res.render('register');
  // res.send('<h1>Welcome to the club!</h1>');
  // res.redirect('/home');

});


router.post('/class', validate(loginValidation), (req, res) => {
  res.render('class');
  // res.send('<h1>login completed successfully!!')
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
