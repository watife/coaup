import makeNewAuthUser from './register-auth'

import companyService from '../../company/use-cases'

/**
 * Helpers
 */
import HttpClient from '../../../common/HttpClient'

const registerAuthUser = makeNewAuthUser({
  HttpClient,
  validateCompany: companyService.validateFields
})

const authService = Object.freeze({ registerAuthUser })

export default authService
