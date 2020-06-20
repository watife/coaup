import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    jwt.verify(authHeader, TOKEN_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
}

export default authenticateJWT
