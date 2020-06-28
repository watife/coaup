const statusCode = {
  OK: 200,
  Created: 201,
  BadRequest: 400,
  UnAuthorized: 401,
  NotFound: 404,
  ServerError: 500,
  NotProcessed: 422
}

const responseJSON = (res, status, body) => {
  return res.status(statusCode[status]).json(body)
}

const responseError = (res, status, message) => {
  responseJSON(res, status, message)
}

const Resp = Object.freeze({
  responseJSON,
  responseError
})

export default Resp
