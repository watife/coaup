import {GET_COMPANY, POST_COMPANY, POST_COMPANY_ERROR, POST_COMPANY_SUCCESS} from "./actions";

export function companyReducer(company = [], action) {

  switch(action.type) {

    case GET_COMPANY:
      return action.payload

    case POST_COMPANY:
      return {
        ...company,
        company: action.payload
      };

    case POST_COMPANY_SUCCESS:
      return action.payload

    case POST_COMPANY_ERROR:
      return action.payload

    default:
      return company;
  }
}