const Joi = require('@hapi/joi');

const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const companyValidator = Joi.object({
	company_name: Joi.string()
		.alphanum()
		.trim()
		.min(3)
		.max(30)
		.required(),

	company_address: Joi.string()
		.min(10)
		.trim()
		.required(),

	password: Joi.string()
		.pattern(new RegExp(pattern))
		.trim()
		.required(),

	password_confirm: Joi.ref('password'),

	billing_method: Joi.string()
		.valid('salary', 'invoicing', 'both')
		.trim()
		.required(),

  email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.trim()
		.required(),
}).options({abortEarly: false});

export default companyValidator;