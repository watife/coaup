const Joi = require('@hapi/joi');

const mailerValidator = Joi.object({
  to: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim()
    .required(),

  from: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .trim()
    .required(),

  subject: Joi.string()
    .trim()
    .required(),

  text: Joi.string()
    .trim(),

  html: Joi.string()
    .required(),

  data: Joi.object(),

}).options({abortEarly: false});

export default mailerValidator;