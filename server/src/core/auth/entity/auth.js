const modelAuth = ({ validate, makeHash }) => {
  return async function makeAuthUser({
    email,
    password,
    password_confirm,
    user_type,
    ...others
  } = {}) {
    try {
      password = password && password.trim()
      password_confirm = password_confirm && password_confirm.trim()
      email = email && email.trim().toLowerCase()
      user_type = user_type && user_type.trim()

      validate({
        password,
        password_confirm,
        email,
        user_type
      })

      let hashedPassword = await makeHash(password)

      return Object.freeze({
        email,
        password: hashedPassword,
        user_type,
        ...others
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default modelAuth
