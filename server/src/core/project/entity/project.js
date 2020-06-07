const modelProject = ({ validate }) => {
  return function makeProject ({
    name,
    description,
    projectManager,
    company,
    staff,
  } = {}) {

    validate({ name, description, projectManager, company, staff });

    return Object.freeze({
      name,
      description,
      projectManager,
      company,
    })
  }
}

export default modelProject;