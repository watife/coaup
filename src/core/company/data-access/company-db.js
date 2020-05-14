export default function makeCompanyDb ({ makeDb, CompanyModel }) {
  return Object.freeze({
    findAll,
    create,
    findOne,
    findByEmail,
    findAndPopulate,
    findOneAndUpdate,
  })

  async function create (companyData) {
    await makeDb();
    const result = await CompanyModel.create(companyData);

    if (result) delete result['password'];

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

    if (result) delete result['password'];

    return result;
  }

  async function findByEmail({ email }) {
    await makeDb();
    const result = await CompanyModel.findOne({ email }).lean();

    if (result) delete result['password'];

    return result;
  }

  async function findAndPopulate({ email }) {
    await makeDb();
    const result = await CompanyModel.findOne({ email }).populate('staff').lean();
    return result;
  }

  async function findOneAndUpdate({ id, updateData }) {
    await makeDb();
    const result = await CompanyModel.findByIdAndUpdate(id, updateData).lean();
    return result;
  }
}