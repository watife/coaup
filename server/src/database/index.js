import mongoose from 'mongoose'
import makeCompanyDb from '../core/company/data-access/company-db'
import CompanyModel from '../core/company/data-access/company-db-schema'
import makeStaffDb from '../core/staff/data-acess/staff-db'
import StaffModel from '../core/staff/data-acess/staff-db-schema'
import makeProjectDb from '../core/project/data-acess/project-db'
import ProjectModel from '../core/project/data-acess/project-db-schema'

require('dotenv').config()

const url = process.env.DB_COMPANY_DB_URL

mongoose.set('debug', true)

export async function makeDb() {
  try {
    const connect = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    if (connect) console.log('connection successful')
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

const db = Object.freeze({
  companyDb,
  staffDb,
  projectDb,
})

export default db
