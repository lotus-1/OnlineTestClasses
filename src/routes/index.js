const express = require('express');
const = require('./../model'); *
const router = express.Router();
router.get('/', (req, res) => {
  res.render('home', { })*
});

module.exports = router;
