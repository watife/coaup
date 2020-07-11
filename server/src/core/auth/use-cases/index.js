import jwtDecode from 'jwt-decode'

import makeRegisterAuthUser from './register-authuser'
import makeLoginAuthUser from './login-authuser'

import db from '../../../database'
import { compareHash } from '../../../helpers/hash'
import tokenGenerator from '../../../helpers/tokenGenerator'

/**
 * services usecase
 */
import mailingService from '../../mailer/use-cases'
import companyService from '../../company/use-cases'
import personalService from '../../personal/use-cases'

const { authDb } = db
const { createCompany } = companyService
const { createPersonal } = personalService
const registerAuthUser = makeRegisterAuthUser({
  authDb,
  createCompany,
  createPersonal,
  mailingService
})
const loginAuthUser = makeLoginAuthUser({
  authDb,
  compareHash,
  tokenGenerator,
  jwtDecoder: jwtDecode
})

const authServices = Object.freeze({
  registerAuthUser,
  loginAuthUser
})

export default authServices
