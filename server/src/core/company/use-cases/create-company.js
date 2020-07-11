import makeCompany from '../entity'

export default function makeCreateCompany({ companyDb }) {
  return async function createCompany({ data, session }) {
    try {
      const company = makeCompany(data)

      const exists = await companyDb.findIfExists({
        company_name: company.company_name
      })
      if (exists) throw new Error('company already exists')

      const createNewCompany = await companyDb.create({
        data: company,
        session
      })

      if (!createNewCompany[0]._id)
        throw new Error('User could not be created')

      return 'Registration successful'
    } catch (e) {
      return e.message
    }
  }
}
