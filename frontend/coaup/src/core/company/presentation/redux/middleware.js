import {
  POST_COMPANY,
  POST_COMPANY_ERROR,
  POST_COMPANY_SUCCESS
} from "./actions";

import companyService from "../../use-cases";
import {apiRequest} from "../../../common/redux/action";

const { postCompany } = companyService;

export const createCompany = ({dispatch}) => next => action => {
  next(action);
  if (action.type === POST_COMPANY) {
    dispatch(apiRequest(postCompany, action.payload, POST_COMPANY_SUCCESS, POST_COMPANY_ERROR));
  }
};

export const companyMdl = [createCompany];