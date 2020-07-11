/**
 * Dependencies (depends on use-cases)
 */
import authServices from '../use-cases'

/**
 * controllers
 */
import makeCreateAuthUser from './create-auth'
import makeLoginAuthUser from './login-auth'

const { registerAuthUser, loginAuthUser } = authServices

const createAuthUser = makeCreateAuthUser({ registerAuthUser })
const loginUser = makeLoginAuthUser({ loginAuthUser })

const authController = Object.freeze({
  createAuthUser,
  loginUser
})

export default authController
