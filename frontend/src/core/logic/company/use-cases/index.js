import makePostCompany from './post-company'
import makeGetCompanies from './get-companies'
import makeLoginCompany from './login-company'
import makeValidateFields from './validate-fields'

/**
 * Helpers
 */
import HttpClient from '../../../common/HttpClient'

const postCompany = makePostCompany({ HttpClient })
const getCompanies = makeGetCompanies({ HttpClient })
const loginCompany = makeLoginCompany({ HttpClient })
const validateFields = makeValidateFields()

const companyService = Object.freeze({
  postCompany,
  loginCompany,
  getCompanies,
  validateFields
})

export default companyService
