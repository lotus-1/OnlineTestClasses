const express = require('express');
const dataBase = require('./../model');
const {class7, class8, class9} = require('../helpers/index');
const  register = require('../views/register');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'), {
    title: 'home page',
    username: 'user34'
  }
});

router.get('/register', (req, res) => {
  res.render('register'), {
    title: 'register'
  };
});

router.get('/class-7', (req, res) => {
  res.render('seventhGrade'), {
    title: 'seventh grade',
    username: username

  };
});

router.get('/class-8', (req, res) => {
  res.render('eightGrade'), {
    title: 'eight grade',
    username: username
  };
});

router.get('/class-9', (req, res) => {
  res.render('ninethGrade'), {
    title: 'nineth grade',
    username: username
  }
});


module.exports = router;
