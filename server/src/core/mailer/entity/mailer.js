const modelMailer = ({ validate, emailSender }) => {
  return function makeMailer({
    to,
    from,
    subject,
    text,
    html,
    data,
  } = {}) {
    to = to && to.trim().toLowerCase()
    from = from && from.trim().toLowerCase()
    subject = subject && subject.trim().toLowerCase()
    text = text && text.trim().toLowerCase()
    html = html && html.trim().toLowerCase()

    validate({
      to,
      from: emailSender,
      subject,
      text,
      html,
      data,
    })

    return Object.freeze({
      to,
      from: emailSender,
      subject,
      text,
      html,
      data,
    })
  }
}

export default modelMailer
