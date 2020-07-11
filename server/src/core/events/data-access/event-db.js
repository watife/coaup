export default function makeEventDb({ makeDb, EventModel }) {
  return Object.freeze({
    create,
    update,
    findByDate
  })

  async function create({ eventData }) {
    await makeDb()
    const event = new EventModel({
      staff: eventData.staff,
      company: eventData.company,
      date: eventData.date
    })

    event.events.push(eventData.events)

    const result = await event.save()

    return result
  }

  async function update({ eventData }) {
    await makeDb()
    const result = await EventModel.update(
      { _id: eventData._id },
      { $push: { events: eventData.events } }
    ).lean()
    return result
  }

  async function findByDate({ date }) {
    await makeDb()
    const result = await EventModel.findOne({ date }).lean()
    return result
  }
}
