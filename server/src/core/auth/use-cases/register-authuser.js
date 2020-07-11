import makeAuthUser from '../entity'

export default function makeRegisterAuthUser({
  authDb,
  createCompany,
  createPersonal,
  mailingService
}) {
  return async function registerAuthUser(info) {
    const user = await makeAuthUser(info)
    const USER_TYPE = {
      personal: createPersonal,
      company: createCompany
    }

    const { email, user_type } = user
    const exists = await authDb.findIfExists({
      email,
      user_type
    })
    if (exists) {
      throw new Error('this account already exist')
    }

    const session = await authDb.transaction()

    session.startTransaction()

    try {
      const createNewUser = await authDb.create({ user, session })

      if (!createNewUser[0]._id)
        throw new Error('User could not be created')

      const { _id } = createNewUser[0]

      if (!USER_TYPE[user_type])
        throw new Error("The specified User type doesn't exist")

      const data = {
        ...user,
        auth: _id.toString()
      }

      await USER_TYPE[user_type]({
        data,
        session
      })

      const mailData = {
        to: user.email,
        subject: 'Welcome to coaup',
        html: 'register',
        data: {
          message: 'welcome to coaup'
        }
      }

      await mailingService.sendMail(mailData)

      const success = await session.commitTransaction()

      if (success) return 'registration successful'
    } catch (e) {
      await session.abortTransaction()
      return e.message
    } finally {
      session.endSession()
    }
  }
}
