import entityCompany from './company';
// import companyValidator from './validator';

// function validate (company) {
//   let value = companyValidator.validate(company);
//   if (value.error) throw new Error(value.error.details[0].message)
//   return value;
// };

const makeCompany = entityCompany();

export default makeCompany;