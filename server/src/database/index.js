import mongoose from 'mongoose'
import makeCompanyDb from '../core/company/data-access/company-db'
import CompanyModel from '../core/company/data-access/company-db-schema'
import makeStaffDb from '../core/staff/data-acess/staff-db'
import StaffModel from '../core/staff/data-acess/staff-db-schema'
import makeProjectDb from '../core/project/data-acess/project-db'
import ProjectModel from '../core/project/data-acess/project-db-schema'
import makeEventDb from '../core/events/data-access/event-db'
import EventModel from '../core/events/data-access/event-db-schema'
import makeAuthDb from '../core/auth/data-access/auth-db'
import AuthModel from '../core/auth/data-access/auth-db-schema'
import makePersonalDb from '../core/personal/data-access/personal-db'
import PersonalModel from '../core/personal/data-access/personal-db-schema'

require('dotenv').config()

const url = process.env.DB_COMPANY_DB_URL

mongoose.set('debug', true)

export async function makeDb() {
  try {
    if (!mongoose.connection.readyState) {
      const connect = await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })

      if (connect) console.log('connection successful')
    }

    return mongoose
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const isValid = (id) => {
  return mongoose.Types.ObjectId.isValid(id)
}

const companyDb = makeCompanyDb({ makeDb, CompanyModel })
const staffDb = makeStaffDb({ makeDb, StaffModel, isValid })
const projectDb = makeProjectDb({ makeDb, ProjectModel })
const eventDb = makeEventDb({ makeDb, EventModel })
const authDb = makeAuthDb({ makeDb, AuthModel })
const personalDb = makePersonalDb({ makeDb, PersonalModel })

const db = Object.freeze({
  companyDb,
  staffDb,
  projectDb,
  eventDb,
  authDb,
  personalDb
})

export default db
