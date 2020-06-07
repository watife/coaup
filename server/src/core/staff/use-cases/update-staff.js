export default function makeFindOneStaff({ staffDb }) {
  return async function findOneStaff(id) {
    const oneStaff = await staffDb.findOne(id);

    if (!oneStaff) throw new Error("staff does not exist")

    return oneStaff
  }
}