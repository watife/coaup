export default function makeLoginAuthUser({ loginAuthUser }) {
  return async function loginUser(req, res) {
    try {
      const { body } = req

      const user = await loginAuthUser({ ...body })

      const response = {
        status: 'success',
        response: user
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
