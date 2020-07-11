import entityCompany from './company'
import companyValidator from './validator'

const validate = async auth => {
  try {
    return await companyValidator.isValid(auth)
  } catch (e) {
    throw new Error(e.errors)
  }
}

const makeCompany = entityCompany({ validate })

export default makeCompany
