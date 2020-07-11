import makeCreatePersonal from './create-personal'

/**
 * Database access {from data-acess}
 */
import db from '../../../database'

const { personalDb } = db

const createPersonal = makeCreatePersonal({ personalDb })

const personalService = Object.freeze({
  createPersonal
})

export default personalService
