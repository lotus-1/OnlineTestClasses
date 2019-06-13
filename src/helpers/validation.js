const Joi = require('joi');

const loginValidation = {
   full_name: Joi.string().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
};

const signupValidation = {

    student: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    confirmpassword: Joi.string().required().valid(Joi.ref('password')),
};


module.exports = {
  loginValidation,
  signupValidation
};
