import bcrypt from 'bcrypt';
import modelStaff from './staff';
import staffValidator from './validator';

function makeHash (hash) {
  let hashed = bcrypt.hashSync(hash, 10);
  return hashed;
};

function validate (staff) {
  let value = staffValidator.validate(staff);
  if (value.error) throw new Error(value.error.details[0].message)
  return value;
};

const makeStaff = modelStaff({ validate, makeHash });

export default makeStaff;
