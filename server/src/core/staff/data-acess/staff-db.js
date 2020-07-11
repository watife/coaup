export default function makeStaffDb({ makeDb, StaffModel, isValid }) {
  return Object.freeze({
    findAll,
    create,
    findOne,
    findByEmail,
    findAndPopulate,
    findAndUpdateArray
  })

  async function create(staffData) {
    await makeDb()
    const result = await StaffModel.create(staffData)

    if (result) delete result['password']

    return result
  }

  async function findAll() {
    await makeDb()
    const result = await StaffModel.find({}).lean()
    return result
  }

  async function findOne(id) {
    await makeDb()
    const valid = isValid(id)

    if (!valid) throw new Error('staff does not exist')

    const result = await StaffModel.findById(id)
      .populate('company')
      .populate('project')
      .lean()

    if (result) {
      delete result['password']
      delete result['company']['password']
    }

    return result
  }

  async function findByEmail({ email }) {
    await makeDb()
    const result = await StaffModel.findOne({ email }).lean()

    if (result) delete result['password']

    return result
  }

  async function findAndPopulate({ email }) {
    await makeDb()
    const result = await StaffModel.findOne({ email })
      .populate('company')
      .populate('project')
      .lean()
    return result
  }

  async function findAndUpdateArray(id, updateDetails) {
    await makeDb()
    const result = StaffModel.findByIdAndUpdate(id, {
      $push: updateDetails
    }).lean()
    return result
  }
}
