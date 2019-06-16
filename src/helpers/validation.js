const Joi = require('joi');
console.log("this is enass");

const loginValidation = {
   full_name: Joi.string().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
};
console.log("this is huda");

const signupValidation = {

    student: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6),
    confirmpassword: Joi.string().valid(Joi.ref('password')),
};


module.exports = {
  loginValidation,
  signupValidation
};
