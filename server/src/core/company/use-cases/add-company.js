import makeCompany from '../entity';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany (companyInfo) {
    const company = makeCompany(companyInfo)
    const {email, company_name} = company;
    const exists = await companyDb.findIfExists({ email, company_name})
    if (exists) {
      throw new Error("company already exists")
    }

    return companyDb.create({...company})
  }
}