export default function makeCompanyDb({ makeDb, CompanyModel }) {
  return Object.freeze({
    findAll,
    create,
    findOne,
    findIfExists,
    findAndPopulate
  })

  async function create({ data, session }) {
    await makeDb()
    const createCompany = await CompanyModel.createCollection()

    if (createCompany) {
      const result = await CompanyModel.create([data], { session })

      return result
    }
  }

  async function findAll() {
    await makeDb()
    const result = await CompanyModel.find({}).lean()
    return result
  }

  async function findOne(id) {
    await makeDb()
    const result = await CompanyModel.findById(id).lean()

    return result
  }

  async function findIfExists({ email, company_name, session }) {
    await makeDb()
    const result = await CompanyModel.findOne({ company_name })
      .session(session)
      .lean()

    return result
  }

  async function findAndPopulate({ email }) {
    await makeDb()
    const result = await CompanyModel.findOne({ email })
      .populate()
      .lean()
    return result
  }
}
