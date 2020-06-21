import makeEvent from '../entity'

export default function makeAddEvent({
  eventDb,
  staffDb,
  companyDb,
}) {
  return async function addEvent(eventData) {
    const validEventData = makeEvent(eventData)

    console.log('validEventData', validEventData)

    const {
      staff,
      company,
      date,
      events: { description, time },
    } = validEventData

    const exist = await eventDb.findByDate({
      date,
    })

    if (exist && exist._id) {
      const existEvent = exist.events.filter((event) => {
        return (
          event.description === description && event.time === time
        )
      })

      if (existEvent.length)
        throw new Error('This event already exists')
    }

    const eventCreatorDb = staff ? staffDb : companyDb

    const user = await eventCreatorDb.findOne(company || staff)

    if (!user)
      throw new Error('This user does not exist, contact admin')

    if (exist) {
      const updateEvent = await eventDb.update({
        eventData: { ...validEventData, _id: exist._id },
      })

      if (updateEvent) return 'event added successfully'
    }

    const createEvent = await eventDb.create({
      eventData: validEventData,
    })

    if (createEvent) return 'event added successfully'
  }
}
