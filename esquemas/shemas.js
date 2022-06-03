const Joi = require('joi');

const user = Joi.string().alphanum().min(3).max(30).required();
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')); // la contraseña debe de ser minimo de 3
const search = Joi.string();

const createUSer = Joi.object({
  user: user.required(),
  password: password.required(),
});

const searchMovie = Joi.object({
  search: search.required(),
});

module.exports = { createUSer, searchMovie };
