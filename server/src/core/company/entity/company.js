const modelCompany = ({ validate, makeHash }) => {
  return function makeCompany ({
    company_name,
    company_address,
    password,
    password_confirm,
    billing_method,
    email,
  } = {}) {

    company_name = company_name && company_name.trim().toLowerCase();
    company_address = company_address && company_address.trim().toLowerCase();
    password = password && password.trim().toLowerCase();
    password_confirm = password_confirm && password_confirm.trim().toLowerCase();
    billing_method = billing_method && billing_method.trim().toLowerCase();
    email = email && email.trim().toLowerCase();

    validate({ company_name, company_address, password, password_confirm, email, billing_method });

    let hashedPassword = makeHash(password);

    return Object.freeze({
      company_name,
      company_address,
      email,
      billing_method,
      password: hashedPassword,
    })
  }
}

export default modelCompany;