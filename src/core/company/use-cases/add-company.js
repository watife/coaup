/**
 * Dependencies: {
 *   makeCompanay {from entity},
 *   companyDb {inserted from data-access adapter}
 * }
 */

import makeCompany from '../entity';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany (companyInfo) {
    const exists = await companyDb.findByEmail({ email: companyInfo.email });
    
    if (exists) {
      throw new Error("Company already exists")
    }

    const company = makeCompany(companyInfo)

    const newCompany = companyDb.create({...company})

    if (newCompany._id) return "Registration successful"

    return newCompany //only reached if there is an error
  }
}