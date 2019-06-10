const express = require('express');
const dataBase = require('./../model');
const {class7, class8, class9, register} = require('../views/helpers/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
title: 'OnlineTestClasses',
username: student.name
   })
});

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'register',
    username: student.name,
    register
  })
});

router.get('/class-7', (req, res) => {
  res.render('class-7', {
    title: 'class-7',
    username: student.name,
    class: class7
  })
});

router.get('/class-8', (req, res) => {
  res.render('class-8', {
    title: 'class-8',
    username: student.name,
    class: class8
  })
});

router.get('/class-9', (req, res) => {
  res.render('class-9', {
    title: 'class-9',
    username: student.name,
    class: class9
  })
});


module.exports = router;
