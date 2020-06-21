import makeAddProject from './add-project';

/**
 * Database access {from data-acess}
 */
import db from '../../../database';


const { even, staffDb, companyDb } = db;

const addProject = makeAddProject({ projectDb, staffDb, companyDb })

const projectService = Object.freeze({
  addProject,
})

export default projectService;