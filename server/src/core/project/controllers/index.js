/**
 * Dependencies (depends on use-cases)
 */
import projectService from '../use-cases'

/**
 * controllers
 */
import makePostProject from './post-project'

const { addProject } = projectService

const postProject = makePostProject({ addProject })

const projectController = Object.freeze({
  postProject,
})

export default projectController;
