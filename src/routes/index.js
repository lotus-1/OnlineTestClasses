const express = require('express');
const dataBase = require('./../model');
const {class7, class8, class9} = require('../helpers/index');
const  register = require('../helpers/register');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/register', (req, res) => {
  res.render('register');
});

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
