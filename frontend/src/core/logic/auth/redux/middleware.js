import { SET_AUTH_REQUEST, setAuth } from './actions'

export const setAuthMdl = ({ dispatch }) => next => action => {
  next(action)
  if (action.type === SET_AUTH_REQUEST) {
    localStorage.setItem('user_access_token', action.payload.token)
    localStorage.setItem('user_type', action.payload.user_type)
    localStorage.setItem('exp', action.payload.exp)

    dispatch(setAuth(action.payload))
  }
}

export const authMdl = [setAuthMdl]
