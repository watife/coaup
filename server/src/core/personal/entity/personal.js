const modelPersonal = ({ validate }) => {
  return function makePersonal({ first_name, last_name, auth } = {}) {
    first_name = first_name && first_name.trim().toLowerCase()
    last_name = last_name && last_name.trim().toLowerCase()

    validate({
      first_name,
      last_name,
      auth
    })

    return Object.freeze({
      first_name,
      last_name,
      auth
    })
  }
}

export default modelPersonal
