export const GET_COMPANY                   = '[company] GET';
export const FETCH_COMPANY_SUCCESS         = '[company] Fetch success';
export const FETCH_COMPANY_ERROR           = '[company] Fetch Error';
export const UPDATE_COMPANY                = '[company] Update';

// action creators
export const getCompany = () => ({
  type: GET_COMPANY
});
// export const selectBook = (bookId) => ({
//   type   : SELECT_BOOK,
//   payload: bookId
// });