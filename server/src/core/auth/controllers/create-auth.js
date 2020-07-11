export default function makeCreateAuthUser({ registerAuthUser }) {
  return async function CreateAuthUser(req, res) {
    try {
      const { body } = req

      const newUser = await registerAuthUser({ ...body })

      if (newUser !== 'registration successful')
        throw new Error(newUser)

      const response = {
        status: 'success',
        response: newUser
      }

      return res.status(201).json(response)
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    }
  }
}
