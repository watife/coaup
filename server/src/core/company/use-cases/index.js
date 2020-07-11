import makeCreateCompany from './create-company'
import makeFindAllCompany from './find-company'
import makeFindOneCompany from './findone-company'
import db from '../../../database'

/**
 * Mailing service usecase
 */
import mailingService from '../../mailer/use-cases'

const { companyDb } = db
const createCompany = makeCreateCompany({ companyDb, mailingService })
const findAllCompany = makeFindAllCompany({ companyDb })
const findOneCompany = makeFindOneCompany({ companyDb })

const companyService = Object.freeze({
  createCompany,
  findAllCompany,
  findOneCompany
})

export default companyService
