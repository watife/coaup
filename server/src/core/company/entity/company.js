const modelCompany = ({ validate }) => {
  return function makeCompany({
    company_name,
    company_address,
    billing_method,
    auth
  } = {}) {
    company_name = company_name && company_name.trim().toLowerCase()
    company_address =
      company_address && company_address.trim().toLowerCase()
    billing_method =
      billing_method && billing_method.trim().toLowerCase()

    validate({
      company_name,
      company_address,
      billing_method,
      auth
    })

    return Object.freeze({
      company_name,
      company_address,
      billing_method,
      auth
    })
  }
}

export default modelCompany
