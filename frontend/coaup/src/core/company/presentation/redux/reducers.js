import {GET_COMPANY} from "./actions";

export function companyReducer(company = [], action) {

  switch(action.type) {
    case GET_COMPANY:
      return action.payload

    default:
      return company;
  }
}