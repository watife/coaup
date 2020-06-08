export default function makeCompanyDb ({ makeDb, CompanyModel }) {
  return Object.freeze({
    findAll,
    create,
    findOne,
    findByEmail,
    findAndPopulate,
  })

  async function create (companyData) {
    await makeDb();
    const result = await CompanyModel.create(companyData);

    if (result._id) delete result['password'];

    return result;
  }

  async function findAll() {
    await makeDb();
    const result = await CompanyModel.find({}).lean();
    return result;
  }

  async function findOne(id) {
    await makeDb();
    const result = await CompanyModel.findById(id).lean();

    if (result._id) delete result['password'];

    return result;
  }

  async function findByEmail({ email }) {
    await makeDb();
    const result = await CompanyModel.findOne({ email }).lean();

    if (result && result._id) delete result['password'];

    return result;
  }

  async function findAndPopulate({ email }) {
    await makeDb();
    const result = await CompanyModel.findOne({ email }).populate().lean();
    return result;
  }
}