import modelProject from './project';
import projectValidator from './validator';

function validate (project) {
  let value = projectValidator.validate(project);
  if (value.error) throw new Error(value.error.details[0].message)
  return value;
};

const makeProject = modelProject({ validate });

export default makeProject;
