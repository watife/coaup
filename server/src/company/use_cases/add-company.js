import makeCompany from '../entity';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany (companyInfo) {
    console.log(companyInfo)
    const exists = await companyDb.findByEmail({ email: companyInfo.email })
    if (exists) {
      console.log(exists)
      throw new Error("Company already exists")
    }

    const company = makeCompany(companyInfo)

    console.log(company)

    return companyDb.create({...company})
  }
}