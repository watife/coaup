import { GET_COMPANY, UPDATE_COMPANY } from './actions'

export function companyReducer(company = {}, { type, payload }) {
  switch (type) {
    case GET_COMPANY:
      return payload

    case UPDATE_COMPANY:
      return payload

    default:
      return company
  }
}
