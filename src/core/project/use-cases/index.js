import makeAddProject from './add-project';

/**
 * Database access {from data-acess}
 */
import db from '../../../database';


const { projectDb, staffDb } = db;

const addProject = makeAddProject({ projectDb, staffDb })

const projectService = Object.freeze({
  addProject,
})

export default projectService;