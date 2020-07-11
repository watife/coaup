export default function makeAuthDb({ makeDb, AuthModel }) {
  return Object.freeze({
    create,
    findOne,
    findIfExists,
    findAndDelete,
    findUser,
    transaction
  })

  async function create({ user, session }) {
    await makeDb()
    const createAuth = await AuthModel.createCollection()

    if (createAuth) return await AuthModel.create([user], { session })
  }

  async function findOne({ id, session }) {
    await makeDb()
    const result = await AuthModel.findById(id)
      .session(session)
      .lean()

    return result
  }

  async function findIfExists({ email, user_type, session }) {
    await makeDb()
    const result = await AuthModel.findOne({
      $and: [{ email }, { user_type }]
    })
      .session(session)
      .select('+password')
      .lean()

    return result
  }

  async function findUser({ email, session }) {
    await makeDb()
    const result = await AuthModel.findOne({ email })
      .session(session)
      .lean()

    return result
  }

  async function findAndDelete({ id, session }) {
    await makeDb()
    const result = await AuthModel.findByIdAndDelete(id)
      .session(session)
      .lean()

    return result
  }

  async function transaction() {
    const db = await makeDb()
    const session = await db.startSession()

    return session
  }
}
