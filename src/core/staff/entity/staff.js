const modelStaff = ({ validate, makeHash }) => {
  return function makeStaff ({
    fullName,
    jobDescription,
    password,
    repeat_password,
    email,
    billingMethod,
    company,
    role,
    project,
  } = {}) {

    validate({ fullName, jobDescription, password, repeat_password, email, billingMethod, company, role, project });

    let hashedPassword = makeHash(password);

    return Object.freeze({
      fullName,
      email,
      password: hashedPassword,
      company,
      jobDescription,
      billingMethod,
      role,
      project,
    })
  }
}

export default modelStaff;