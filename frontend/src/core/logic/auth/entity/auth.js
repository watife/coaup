const entityAuth = () => {
  return function makeAuth({
    password,
    password_confirm,
    email
  } = {}) {
    return Object.freeze({
      email,
      password,
      password_confirm
    })
  }
}

export default entityAuth
