export const GET_COMPANY                   = '[company] GET';
export const FETCH_COMPANY_SUCCESS         = '[company] Fetch success';
export const FETCH_COMPANY_ERROR           = '[company] Fetch Error';
export const UPDATE_COMPANY                = '[company] Update';
export const POST_COMPANY                  = '[company] CREATE REQUEST';
export const POST_COMPANY_SUCCESS          = '[company] CREATE SUCCESS';
export const POST_COMPANY_ERROR            = '[company] CREATE FAILURE';

// action creators
export const getCompany = () => ({
  type: GET_COMPANY
});

export const createCompany = (data) => ({
  type   : POST_COMPANY,
  payload: data
});
// export const selectBook = (bookId) => ({
//   type   : SELECT_BOOK,
//   payload: bookId
// });