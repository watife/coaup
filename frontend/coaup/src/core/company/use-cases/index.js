import makePostCompany from './post-company';
import makeGetCompanies from './get-companies';

/**
 * Helpers
 */
import HttpClient from '../../common/HttpClient';

const postCompany = makePostCompany({ HttpClient })
const getCompanies = makeGetCompanies({ HttpClient })

const companyService = Object.freeze({
  postCompany,
  getCompanies
})

export default companyService;