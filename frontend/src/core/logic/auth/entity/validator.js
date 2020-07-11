import * as Yup from 'yup'

let schema = Yup.object().shape({
  email: Yup.email().required('email name is required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /(?=.*?[A-Z])/,
      'Password Must contain at least one uppercase letter.'
    )
    .matches(
      /(?=(.*[a-z]){1,})/,
      'Password Must contain at least one lowercase letter and one number.'
    )
    .matches(
      /(?=(.*[\d]){1,})(?=(.*[\W]){1,})/,
      'Password Must at least one special character.'
    )
    .matches(
      /(?!.*\s).{8,}/,
      'Password Must at least one special character.'
    ),
  password_confirm: Yup.string().oneOf(
    [Yup.ref('password')],
    "Confirmed password doesn't match password field"
  ),
  billing_method: Yup.object().required('billing method is required')
})

export default schema
