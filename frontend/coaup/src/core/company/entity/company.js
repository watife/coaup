const entityCompany = () => {
  return function makeCompany ({
    company_name,
    company_address,
    password,
    password_confirm,
    billing_method,
    email,
  } = {}) {

    // validate({ companyName, address, password, repeat_password, email, billing_method });

    return Object.freeze({
      company_name,
      company_address,
      email,
      password,
      password_confirm,
      billing_method
    })
  }
}

export default entityCompany;