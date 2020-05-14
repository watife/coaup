export default function makeFindOneCompany({ companyDb }) {
  return async function findAndPopulate(id) {
    return companyDb.findOne(id)
  }
}