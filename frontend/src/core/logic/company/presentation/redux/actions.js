export const GET_COMPANY = '[company] GET'
export const FETCH_COMPANY_SUCCESS = '[company] Fetch success'
export const FETCH_COMPANY_ERROR = '[company] Fetch Error'
export const REQUEST_UPDATE_COMPANY = '[company] Request Update'
export const UPDATE_COMPANY = '[company] Update'

// action creators
export const getCompany = token => ({
  type: GET_COMPANY,
  payload: token
})

export const updateCompany = payload => ({
  type: UPDATE_COMPANY,
  payload
})

export const updateCompanyRequest = payload => ({
  type: REQUEST_UPDATE_COMPANY,
  payload
})
