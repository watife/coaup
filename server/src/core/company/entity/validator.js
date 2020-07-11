const Joi = require('@hapi/joi')

const companyValidator = Joi.object({
  company_name: Joi.string()
    .alphanum()
    .trim()
    .min(3)
    .max(30)
    .required('provide company name'),

  company_address: Joi.string().min(10).trim().required(),

  billing_method: Joi.string()
    .valid('salary', 'invoicing', 'both')
    .trim()
    .required(),

  auth: Joi.string().required()
}).options({ abortEarly: false })

export default companyValidator
