const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { celebrate } = require("celebrate");
const register = require("../views/register");
const validate = require("../helpers/validate");
const { loginValidation, signupValidation } = require("../helpers/validation");
const hashingPassword = require("../helpers/hashing");
const router = express.Router();
const getData = require("../database/queries/getData");
const cookieParser = require("cookie-parser");
const app = express();
const postData = require("../database/queries/postData")
router.use(bodyParser.json());

// router.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("logged_in", true, { HttpOnly, "Max-Age": 9000 });
  // console.log(req.headers.cookie);
});

// router.get("/", (req, res) => {
//   res.cookie("logged_in", true, { HttpOnly, "Max-Age": 9000 });
//   console.log(req.headers.cookie);
// });

router.get("/", (req, res, next) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render('register');
});

router.post("/register", validate(signupValidation), (req, res) => {
  // console.log("inside the register");
  // console.log("this is the pas", req.body.password);
  // console.log("this is the body", req.body);
  // hashingPassword(req.body.password, (error, hashResult) => {
  //   console.log("inside the register1");
  //   if (error) return error;
  //   postData(req.body.username, hashResult, req.body.email, (err, hash) => {
  //     if (err) return err;
  //     res.send("hiii i made registiration");
  //   });
  // });
  console.log('req.body is: ', req.body);
  const { username, email, pass, confirmPassword } = req.body;
  if (pass != confirmPassword) {
    res.send("Password not match");
  } else {
    hashingPassword(pass, (error, hashedPassword) => {
      if (error) {
        console.log(error);
      } else {
        postData(username, email, hashedPassword, (err, result) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            res.render("home");
          }
        });
      }
    });
  }
});

router.get("/class", (req, res) => {
  res.render("class");
  // res.send('<registerregisterh1>login completed successfully!!')
});

router.post("/class", validate(loginValidation), (req, res) => {
  res.render("class");
  // res.send('<registerregisterh1>login completed successfully!!')
});

router.get("/seventhGrade", (req, res) => {
  res.render("seventhGrade");
});
router.post("/seventhGrade", (req, res) => {
  res.render("seventhGrade");
});
router.get("/eightGrade", (req, res) => {
  res.render("eightGrade");
});

router.post("/eightGrade", (req, res) => {
  res.render("eightGrade");
});

router.get("/ninethGrade", (req, res) => {
  res.render("ninethGrade");
});

router.post("/ninethGrade", (req, res) => {
  res.render("ninethGrade");
});

router.get("/students", (req, res) => {
  getData((err, result) => {
    if (err) return err;
    res.json(result);
  });
});

router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
