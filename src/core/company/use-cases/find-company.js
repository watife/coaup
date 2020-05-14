/**
 * 
 * @param {companyDb} expected from data-access
 * 
 * @TODO remove findAllCompany as it is not important, just for testing
 */
export default function makeFindAllCompany({ companyDb }) {
  return async function findAllCompany () {
    return companyDb.findAll()
  }
}