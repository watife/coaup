export default function makeFindOneCompany({ companyDb }) {
  return async function findOneCompany (id) {
    return companyDb.findOne(id)
  }
}