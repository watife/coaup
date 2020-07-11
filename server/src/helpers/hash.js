import argon2 from 'argon2'

async function makeHash(password) {
  try {
    return await argon2.hash(password).then((hash) => {
      return hash
    })
  } catch (e) {
    console.log('password hash error', e)
    throw new error('something went wrong')
  }
}

async function compareHash(hashed, password) {
  try {
    return await argon2.verify(hashed, password).then((match) => {
      return match
    })
  } catch (e) {
    console.log('password compare error', e)
    throw new error('something went wrong')
  }
}

export { makeHash, compareHash }
