import modelProject from '../entity';

export default function makeAddProject({ projectDb, staffDb, companyDb }) {
  return async function addProject(projectData) {
    const exists = await projectDb.findByName({ name: projectData.name });
    
    if (exists) throw new Error("Project already exists")

    const company = await companyDb.findOne(projectData.company)

    if (!company) throw new Error("company entered does not match any company")

    const projectEntries = modelProject(projectData)

    const newProject = await projectDb.create(projectEntries)

    if (!newProject) throw new Error(newProject)

    const updateDetails = { project: newProject._id }

    if (projectData.staff && projectData.staff.length > 0) {
      return projectData.staff.map(async id => {
        return await staffDb.findAndUpdateArray(id, updateDetails)
      })

    }

    return newProject;
  }
}
