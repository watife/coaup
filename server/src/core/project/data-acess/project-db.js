export default function makeStaffDb ({ makeDb, ProjectModel }) {
  return Object.freeze({
    findAll,
    create,
    findByName
  })

  async function create (projectData) {
    await makeDb();
    const result = await ProjectModel.create(projectData);

    return result;
  }

  async function findAll() {
    await makeDb();
    const result = await ProjectModel.find({}).lean();
    return result;
  }

  async function findByName({ name }) {
    await makeDb();
    const result = await ProjectModel.findOne({ name }).lean();
    return result;
  }

}