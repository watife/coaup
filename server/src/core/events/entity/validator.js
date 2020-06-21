const Joi = require('@hapi/joi')

const eventsValidator = Joi.object({
  staff: Joi.string(),

  company: Joi.string(),

  date: Joi.date().required(),

  events: Joi.object().keys({
    description: Joi.string().required(),
    time: Joi.string().regex(
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*([AaPp][Mm])$/,
    ),
    color: Joi.string(),
  }),
}).options({ abortEarly: false })

export default eventsValidator
