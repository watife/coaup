/**
 * Dependencies (depends on use-cases)
 */
import companyService from '../use-cases'

/**
 * controllers
 */
import makeAddCompany from './post-company'
import makeFindAllCompany from './findAll-company'
import makeFindOneCompany from './findOne-company'
import makeAuthCompany from './auth-company'

const {
  addCompany,
  findAllCompany,
  findOneCompany,
  authCompany,
} = companyService //grab all the use-cases {right now just read-only and cannot be modified}

const postCompany = makeAddCompany({ addCompany })
const findAllCompanies = makeFindAllCompany({ findAllCompany })
const findCompanyById = makeFindOneCompany({ findOneCompany })
const loginCompany = makeAuthCompany({ authCompany })

const companyController = Object.freeze({
  postCompany,
  findAllCompany,
  findCompanyById,
  loginCompany,
})

export default companyController
export {
  postCompany,
  findAllCompanies,
  findCompanyById,
  loginCompany,
}
