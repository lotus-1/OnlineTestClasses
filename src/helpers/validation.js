const Joi = require('joi');


const loginValidation = {
   full_name: Joi.string().min(3).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
};


const signupValidation = {

    username: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6),
    confirmPassword: Joi.string().valid(Joi.ref('pass')),
};


module.exports = {
  loginValidation,
  signupValidation
};
