import bcrypt from 'bcrypt'

async function compareHash(plain, hashed) {
  const match = await bcrypt.compare(plain, hashed)
  return match
}

export default compareHash
