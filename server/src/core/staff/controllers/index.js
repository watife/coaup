/**
 * Dependencies (depends on use-cases)
 */
import staffService from '../use-cases';

/**
 * controllers
 */
import makePostStaff from './post-staff';
import makeFindOneStaff from './findone-staff';

const { addStaff, findOneStaff } = staffService;

const postStaff = makePostStaff({ addStaff })
const findAStaff = makeFindOneStaff({ findOneStaff })

const staffController = Object.freeze({
  postStaff,
  findAStaff,
})

export default staffController;