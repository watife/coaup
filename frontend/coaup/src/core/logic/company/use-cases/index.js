import makePostCompany from './post-company'
import makeGetCompanies from './get-companies'
import makeLoginCompany from './login-company'

/**
 * Helpers
 */
import HttpClient from '../../../common/HttpClient'

const postCompany = makePostCompany({ HttpClient })
const getCompanies = makeGetCompanies({ HttpClient })
const loginCompany = makeLoginCompany({ HttpClient })

const companyService = Object.freeze({
  postCompany,
  loginCompany,
  getCompanies
})

export default companyService
