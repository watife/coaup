import makeCompany from '../entity'

export default function makeValidateFields() {
  return async function validateFields(data) {
    const company = makeCompany(data)

    return company
  }
}
