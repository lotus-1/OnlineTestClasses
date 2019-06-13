const Joi = require('joi');

const loginValidation = {
   full_name: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
};

const signupValidation = {

    student: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6),
    confirmpassword: Joi.string().valid(Joi.ref('password')),
};


module.exports = {
  loginValidation,
  signupValidation
};
