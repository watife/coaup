const entityCompany = ({ validate }) => {
  return async function makeCompany({
    company_name,
    company_address,
    billing_method
  } = {}) {
    await validate({
      company_name,
      company_address,
      billing_method
    })

    return Object.freeze({
      company_name,
      company_address,
      billing_method
    })
  }
}

export default entityCompany
