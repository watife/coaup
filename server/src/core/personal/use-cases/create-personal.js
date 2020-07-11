import makePersonal from '../entity'

export default function makeCreatePersonal({ personalDb }) {
  return async function createPersonal({ data, session }) {
    const personal = makePersonal(data)

    const createNewPersonal = await personalDb.create({
      data: personal,
      session
    })

    if (!createNewPersonal[0]._id)
      throw new Error('User could not be created')

    return 'Registration successful'
  }
}
