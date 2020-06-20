import modelMailer from './mailer';
import mailerValidator from './validator';
require('dotenv').config()

const EMAIL_SENDER = process.env.EMAIL_SENDER

function validate (company) {
  let value = mailerValidator.validate(company);
  if (value.error) throw new Error(value.error.details[0].message)
  return value;
};

const makeMailer = modelMailer({ validate, emailSender: EMAIL_SENDER });

export default makeMailer;
