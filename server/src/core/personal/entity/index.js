import modelPersonal from './personal'
import personalValidator from './validator'

function validate(company) {
  let value = personalValidator.validate(company)
  if (value.error) throw new Error(value.error.details[0].message)
  return value
}

const makePersonal = modelPersonal({ validate })

export default makePersonal
