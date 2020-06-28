import { SET_AUTH_REQUEST, setAuth } from './actions'

import decode from 'jwt-decode'

export const setAuthMdl = ({ dispatch }) => next => action => {
  next(action)
  if (action.type === SET_AUTH_REQUEST) {
    const payload = {
      token: action.payload,
      isAuth: true,
      exp: decode(action.payload).exp
    }
    localStorage.setItem('user_access_token', action.payload)
    dispatch(setAuth(payload))
  }
}

export const authMdl = [setAuthMdl]
