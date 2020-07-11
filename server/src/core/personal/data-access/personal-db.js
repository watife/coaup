export default function makePersonalDb({ makeDb, PersonalModel }) {
  return Object.freeze({
    create
  })

  async function create({ data, session }) {
    await makeDb()
    const createPersonal = await PersonalModel.createCollection()

    if (createPersonal) {
      const result = await PersonalModel.create([data], { session })

      return result
    }
  }
}
