const Joi = require('@hapi/joi')

const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

const authValidator = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim()
    .required(),

  password: Joi.string()
    .pattern(new RegExp(pattern))
    .trim()
    .required(),

  password_confirm: Joi.ref('password'),

  user_type: Joi.string()
    .valid('company', 'staff', 'personal')
    .trim()
    .required()
}).options({ abortEarly: false })

export default authValidator
