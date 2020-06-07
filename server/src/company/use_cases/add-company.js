import makeCompany from '../entity';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany (companyInfo) {
    const exists = await companyDb.findByEmail({ email: companyInfo.email })
    if (exists) {
      throw new Error("Company already exists")
    }

    const company = makeCompany(companyInfo)

    return companyDb.create({...company})
  }
}