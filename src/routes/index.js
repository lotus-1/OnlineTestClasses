const express = require('express');
const dataBase = require('./../model');
const  register = require('../views/register');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'), {
    title: 'home page',
    username: 'user'
  }
});

router.get('/register', (req, res) => {
  res.render('register'), {
    title: 'register'
  };
});

router.post('/register', (req, res) => {
  res.render('register');
});

router.post('/login', (req, res) => {
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
