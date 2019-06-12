const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dataBase = require('./../model');
const { celebrate } = require('celebrate');
const  register = require('../views/register');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'), {
    title: 'home page',
    username: 'user'
  }
});

router.get('/register', validate(signupValidation), (req, res) => {
  res.render('register'), {
    title: 'register'
  };
});

router.post('/register', (req, res) => {
  res.render('register');
});

router.post('/login', validate(loginValidation), (req, res) => {
  res.render('login');
})

router.get('/class-7', (req, res) => {
  res.render('seventhGrade'), {
    title: 'seventh grade',
    username: dataBase

  };
});

router.get('/class-8', (req, res) => {
  res.render('eightGrade'), {
    title: 'eight grade',
    username: dataBase
  }
});

router.get('/class-9', (req, res) => {
  res.render('ninethGrade'), {
    title: 'nineth grade',
    username: dataBase
  };
});


module.exports = router;
