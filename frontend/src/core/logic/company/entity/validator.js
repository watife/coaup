import * as Yup from 'yup'

let companyValidator = Yup.object().shape({
  company_name: Yup.string().required('company name is required'),
  company_address: Yup.string()
    .min(10)
    .required('company address is required'),
  billing_method: Yup.object().required('billing method is required')
})

export default companyValidator
