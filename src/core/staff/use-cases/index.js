import makeAddStaff from './add-staff';
import makeFindOneStaff from './findone-staff';

/**
 * Database access {from data-acess}
 */
import db from '../../../database';


const { staffDb, companyDb } = db;

const addStaff = makeAddStaff({ staffDb, companyDb })
const findOneStaff = makeFindOneStaff({ staffDb })

const staffService = Object.freeze({
  addStaff,
  findOneStaff,
})

export default staffService;