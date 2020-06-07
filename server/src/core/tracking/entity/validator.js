const Joi = require('@hapi/joi');

const trackingValidator = Joi.object({
	time: Joi.any().valid('d', 'h', 'm', 's').required,

	date: Joi.string(),

	password: Joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
		.required(),

	repeat_password: Joi.ref('password'),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  
  billingMethod: Joi.string()
    .valid('invoice','salary'),

  allowedTime: Joi.string(),

  overTime: Joi.bool(),
  
  company: Joi.string()
    .required(),
  
  role: Joi.string()
    .valid('staff', 'admin'), //super-admin is the company registered email
  
  project: Joi.array().items(Joi.string()),


}).options({abortEarly: false});

export default trackingValidator;