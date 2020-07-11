const Joi = require('@hapi/joi')

const personalValidator = Joi.object({
  first_name: Joi.string()
    .alphanum()
    .trim()
    .min(2)
    .max(30)
    .required(),

  last_name: Joi.string().alphanum().trim().min(2).max(30).required(),

  auth: Joi.string().required()
}).options({ abortEarly: false })

export default personalValidator
