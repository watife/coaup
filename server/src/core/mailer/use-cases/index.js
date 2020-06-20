import sgMail from '@sendgrid/mail'
import makeSendMail from './send-mail'
import pug from 'pug'
import templates from '../presentation'

require('dotenv').config()

const mailingKey = process.env.MAILER_KEY

sgMail.setApiKey(mailingKey)

const sendMail = makeSendMail({ mailingAPI: sgMail, templates, templateEngine: pug  })

const mailingService = Object.freeze({
  sendMail,
})

export default mailingService
