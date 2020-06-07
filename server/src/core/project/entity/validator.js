const Joi = require('@hapi/joi');

const projectValidator = Joi.object({
	name: Joi.string()
		.min(3)
		.required(),

	description: Joi.string(),

  projectManager: Joi.string(),
  
  company: Joi.string(),

  staff: Joi.array().items(Joi.string()),
  
}).options({abortEarly: false});

export default projectValidator;
