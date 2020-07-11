import {
  GET_COMPANY,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_ERROR,
  REQUEST_UPDATE_COMPANY,
  updateCompany
} from './actions'

import companyService from '../../use-cases'
import { apiRequest } from '../../../../common/redux/action'

const { getCompanies } = companyService

export const getCompanyMdl = ({ dispatch }) => next => action => {
  next(action)
  if (action.type === GET_COMPANY) {
    dispatch(
      apiRequest(
        getCompanies,
        action.payload,
        FETCH_COMPANY_SUCCESS,
        FETCH_COMPANY_ERROR
      )
    )
  }
}

export const updateCompanyMdl = ({ dispatch }) => (next) => action => {
  next(action)

  if (action.type === REQUEST_UPDATE_COMPANY) {
    dispatch(updateCompany(action.payload))
  }
}

export const companyMdl = [getCompanyMdl, updateCompanyMdl]
