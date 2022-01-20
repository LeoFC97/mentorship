const Joi = require('joi'); 
const userSchema = Joi.object({ 
  name: Joi.string().alphanum().min(3).max(30).required(),
  birthyear: Joi.number().integer().min(1980).max(2022).required(), 
}); 

module.exports = { userSchema }
