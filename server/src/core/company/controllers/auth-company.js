export default function makeAuthCompany({ authCompany }) {
  return async function loginCompany(req, res) {
    try {
      const { body } = req

      const company = await authCompany({ ...body })

      return res.status(200).json({
        status: 'success',
        response: company
      })
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    }
  }
}
