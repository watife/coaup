const modelEvent = ({ validate }) => {
  return function makeEvent({ staff, company, date, events } = {}) {
    if (!staff && !company)
      throw new Error('staffId or companyId is required')

    validate({ staff, date, events, company })

    return Object.freeze({
      staff: staff && staff.toLowerCase().trim(),
      company: company && company.toLowerCase().trim(),
      date: date.trim().toLowerCase(),
      events: {
        description: events.description.toLowerCase().trim(),
        time: events.time.toLowerCase().trim()
      },
    })
  }
}

export default modelEvent
