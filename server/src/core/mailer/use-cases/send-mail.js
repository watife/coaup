import makeMailer from '../entity'

export default function makeSendMail({
  mailingAPI,
  templates,
  templateEngine,
}) {
  return async function sendMail(mailingData) {
    const mailer = makeMailer(mailingData)

    const mailerTemplate = templateEngine.renderFile(
      templates[mailer.html],
      mailer.data,
    )

    const newMailData = { ...mailer, html: mailerTemplate }

    const status = await mailingAPI.send(newMailData)

    if (status[0].Response.code !== 202)
      throw new Error(
        "Your email verification wasn't sent, please contact admin",
      )

    return status
  }
}
