const validate = async (vaidateSchema, auth) => {
  try {
    return await vaidateSchema.isValid(auth)
  } catch (e) {
    throw new Error(e.errors)
  }
}

export default validate
