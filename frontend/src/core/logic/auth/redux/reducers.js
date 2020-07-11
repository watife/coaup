import { SET_AUTH } from './actions'

const initialState = {
  token: '',
  isAuth: false,
  exp: null
}

export function authReducer(auth = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return { ...auth, ...payload }

    default:
      return auth
  }
}
