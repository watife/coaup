export default function makeLoginAuthUser({
  authDb,
  compareHash,
  tokenGenerator,
  jwtDecoder
}) {
  return async function (data) {
    const { email, password, user_type } = data
    const user = await authDb.findIfExists({ email, user_type })

    if (!user) {
      throw new Error('Invalid email or password')
    }

    const validPassword = await compareHash(user.password, password)

    if (!validPassword) throw new Error('Invalid email or password')

    const { _id } = user

    const hashInfo = { email, id: _id, user_type: user.user_type }

    const token = tokenGenerator({ hashInfo })

    const expires = jwtDecoder(token).expires

    return {
      token,
      exp: expires,
      user_type: user.user_type
    }
  }
}
