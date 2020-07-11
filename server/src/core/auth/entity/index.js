import modelAuth from './auth'
import authValidator from './validator'
import { makeHash } from '../../../helpers/hash'

function validate(auth) {
  let value = authValidator.validate(auth)
  if (value.error) throw new Error(value.error.details[0].message)
  return value
}

const makeAuthUser = modelAuth({ validate, makeHash })

export default makeAuthUser
