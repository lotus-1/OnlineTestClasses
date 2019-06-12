const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
   res.cookie('name', 'express').send('cookie set');
});

// console.log(document.cookie);
