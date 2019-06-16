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


router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/students', (req,res) => {
 getData((err, result) => {
    if (err) return err;
    res.json(result)
  });
});


router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', validate(signupValidation), (req, res) => {
  res.render(path.join(__dirname, '..', 'views','register'));
  // document.getElementById('registerForm').onclick(() => {
    // res.redirect('/');

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
// router.get('/logout', (req, res) => {
//   delete req.session.authenticated;
//   res.redirect('/');
// });



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

router.get('/logout', (req, res) => {

  res.redirect('/');
})

module.exports = router;
