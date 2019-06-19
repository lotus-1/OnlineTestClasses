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

router.use(bodyParser.urlencoded({ extended: false }));

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

// router.post('/login', validate(loginValidation), (req, res) => {
//   getData(req.body.username, (error, hashPass) => {
//     if (error) res.send('Student name or password not correct');
//     if (!hashPass) {
//       res.send('Username is not found');
//     } else {
//       compare(req.body.password, hashPass, (err, passwordMatch) => {
//         if (err) console.log(err);
//         if (!passwordMatch) {
//           res.send('Passwords do not match');
//         } else {
//           createCookie(req.body.username, (e, result) => {
//             if (e) console.log(e);
//             else {
//               console.log(result);
//               // res.cookie()
//               res.render('home');
//
//             }
//           })
//         }
//       })
//     }
//   })
// })

router.get("/register", (req, res) => {
  res.render('register');
});

router.post("/register", validate(signupValidation), (req, res) => {
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
});

router.post("/class", validate(loginValidation), (req, res) => {
  res.render("class");
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
