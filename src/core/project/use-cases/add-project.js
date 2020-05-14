import modelProject from '../entity';

export default function makeAddProject({ projectDb, staffDb }) {
  return async function addProject(projectData) {
    const exists = await projectDb.findByName({ name: projectData.name });
    
    if (exists) throw new Error("Project already exists")

    const projectEntries = modelProject(projectData)

    const newProject = await projectDb.create(projectEntries)

    if (!newProject) throw new Error(newProject)

    if (projectData.staff && projectData.staff.length > 0) {
      const updateDetails ={ project: newProject._id }
      projectData.staff.map(async id => {
        return await staffDb.findAndUpdateArray(id, updateDetails)
      })
    }

    return newProject;
  }
}
