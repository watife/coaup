import {
  GET_COMPANY,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_ERROR
} from "./actions";

import companyService from "../../use-cases";
import {apiRequest} from "../../../common/redux/action";

const { getCompanies } = companyService;

export const getCompany = ({dispatch}) => next => action => {
  next(action);
  if (action.type === GET_COMPANY) {
    dispatch(apiRequest(getCompanies, action.payload, FETCH_COMPANY_SUCCESS, FETCH_COMPANY_ERROR));
  }
};

export const companyMdl = [getCompany];