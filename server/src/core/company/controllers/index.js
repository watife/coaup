/**
 * Dependencies (depends on use-cases)
 */
import companyService from '../use-cases'

/**
 * controllers
 */
import makeFindAllCompany from './findAll-company'
import makeFindOneCompany from './findOne-company'

const { findAllCompany, findOneCompany } = companyService //grab all the use-cases {right now just read-only and cannot be modified}

// const findAllCompanies = makeFindAllCompany({ findAllCompany })
const findCompanyById = makeFindOneCompany({ findOneCompany })

const companyController = Object.freeze({
  // findAllCompany,
  findCompanyById
})

export default companyController
