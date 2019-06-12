const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/login', (req, res) => {
   res.cookie('name', 'express').send('cookie set');
   return req.headers.cookie;
});
