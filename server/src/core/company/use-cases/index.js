import makeAddCompany from './add-company';
import makeFindAllCompany from './find-company';
import makeFindOneCompany from './findone-company';
import makeAuthCompany from './auth-company';
import db from '../../../database';
import compareHash from '../../../helpers/compareHash';
import tokenGenerator from '../../../helpers/tokenGenerator';

const {companyDb} = db;
const addCompany = makeAddCompany({ companyDb })
const findAllCompany = makeFindAllCompany({ companyDb })
const findOneCompany = makeFindOneCompany({ companyDb })
const authCompany = makeAuthCompany({ companyDb, compareHash, tokenGenerator })

const companyService = Object.freeze({
  addCompany,
  findAllCompany,
  findOneCompany,
  authCompany,
})

export default companyService;