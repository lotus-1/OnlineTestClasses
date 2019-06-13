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

//
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res, next) => {
  res.render('home');
});


router.get('/students', (req,res) => {
 getData((err, result) => {
    if (err) return err;
    res.json(result)
  });
});


router.get('/register', validate(signupValidation), (req, res, next) => {
  res.render('register');
  next();
} , (req, res, next) => {
  res.redirect('/');
});
// router.get('/', (req, res) => {
//   res.redirect('/home');
// });
// res.end();

router.post('/register', validate(signupValidation), (req, res) => {
  res.render('register');
  // res.redirect('/login');
});



router.post('/class', validate(loginValidation), (req, res) => {
  res.render('class');
  // res.send('<registerregisterh1>login completed successfully!!')

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
