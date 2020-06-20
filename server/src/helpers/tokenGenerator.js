import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

export default function tokenGenerator({ hashInfo }) {
  const token = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60, ...hashInfo },
    TOKEN_KEY,
    { algorithm: 'HS256' },
  )
  return token
}
