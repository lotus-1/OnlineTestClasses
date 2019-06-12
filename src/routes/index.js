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

router.get('/register', validate(signupValidation), (req, res) => {
  res.render('register');
});

router.post('/register', validate(signupValidation), (req, res) => {
  res.render('register');
  // res.send('<h1>Welcome to the club!</h1>');
  // res.send('<h1>Registration completed successfully!!')

});

// router.get('/login', (req, res) => {
//   // res.render('login');
//   res.redirect('/login')
// })

router.post('/class', validate(loginValidation), (req, res) => {
  res.render('class');
  // res.redirect('/login')
  // res.send('<h1>login completed successfully!!')
})

//
// router.post('/login', function (req, res, next) {
//
//   // you might like to do a database look-up or something more scalable here
//   if (req.body.uname && req.body.uname === 'user' && req.body.password && req.body.password === 'pass') {
//     req.session.authenticated = true;
//     res.redirect('/secure');
//   } else {
//     req.flash('error', 'Username and password are incorrect');
//     res.redirect('/login');
//   }
//
// });
//
// router.get('/logout', function (req, res, next) {
//   delete req.session.authenticated;
//   res.redirect('/');
// });
//
// };


router.get('/class/seventhGrade', (req, res) => {
  res.render('seventhGrade');
});
router.post('/class/seventhGrade', (req, res) => {
  res.render('seventhGrade');
});
router.get('/class/eightGrade', (req, res) => {
  res.render('eightGrade');
});

router.post('/class/eightGrade', (req, res) => {
  res.render('eightGrade');
});

router.get('/class/ninethGrade', (req, res) => {
  res.render('ninethGrade');
});

router.post('/class/ninethGrade', (req, res) => {
  res.render('ninethGrade');
});


module.exports = router;
