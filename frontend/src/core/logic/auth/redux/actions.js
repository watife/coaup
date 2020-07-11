export const SET_AUTH_REQUEST = '[auth] Set Auth Request'
export const SET_AUTH = '[auth] Set Auth'
export const GET_AUTH_REQUEST = '[auth] Get Auth Request'
export const GET_AUTH = '[auth] Get Auth'
export const REMOVE_AUTH_REQUEST = '[auth] Remove Auth Request'
export const REMOVE_AUTH = '[auth] Remove Auth'

// action creators
export const setAuthRequest = token => ({
  type: SET_AUTH_REQUEST,
  payload: token
})

export const setAuth = payload => ({
  type: SET_AUTH,
  payload
})

export const getAuthRequest = () => ({ type: GET_AUTH_REQUEST })

export const getAuth = () => ({ type: GET_AUTH })

export const removeAuthRequest = () => ({ type: REMOVE_AUTH_REQUEST })

export const removeAuth = () => ({ type: REMOVE_AUTH })
