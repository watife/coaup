const modelCompany = ({ validate, makeHash }) => {
  return function makeCompany ({
    company_name,
    company_address,
    password,
    repeat_password,
    email,
  } = {}) {

    validate({ company_name, company_address, password, repeat_password, email });

    let hashedPassword = makeHash(password);

    return Object.freeze({
      company_name,
      company_address,
      email,
      password: hashedPassword,
    })
  }
}

export default modelCompany;