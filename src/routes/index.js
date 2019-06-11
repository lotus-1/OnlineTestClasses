const express = require('express');
const dataBase = require('./../model');
const  register = require('../views/register');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  res.render('register');
});

router.post('/login', (req, res) => {
  res.render('login');
})

// router.get('/class-7', (req, res) => {
//   res.render('class7');
// });
//
// router.get('/class-8', (req, res) => {
//   res.render('class8');
// });
//
// router.get('/class-9', (req, res) => {
//   res.render('class9')
// });


module.exports = router;
