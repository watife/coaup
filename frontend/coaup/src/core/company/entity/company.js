const entityCompany = () => {
  return function makeCompany ({
    companyName,
    address,
    password,
    repeat_password,
    billing_method,
    email,
  } = {}) {

    // validate({ companyName, address, password, repeat_password, email, billing_method });

    return Object.freeze({
      companyName,
      address,
      email,
      password,
      repeat_password,
      billing_method
    })
  }
}

export default entityCompany;