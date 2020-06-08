const Joi = require('@hapi/joi');

const companyValidator = Joi.object({
	company_name: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),

	company_address: Joi.string()
		.min(10)
		.required(),

	password: Joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
		.min(8)
		.required(),

	repeat_password: Joi.ref('password'),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.required(),
}).options({abortEarly: false});

export default companyValidator;