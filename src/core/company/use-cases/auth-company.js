export default function makeAuthCompany({ companyDb, compareHash, tokenGenerator }) {
  return async function authCompany(companyAuthDetails) {
    const {email, password} = companyAuthDetails;
    const company = await companyDb.findAndPopulate({ email })

    if (!company) {
      throw new Error("Invalid credentials")
    }

    const validPassword = await compareHash(password, company.password)

    if (!validPassword) throw new Error("Invalid credentials")

    const { _id } = company;

    const hashInfo = { email, id:_id };

    const token  = tokenGenerator({ hashInfo })

    const foundCompany = {
      token,
      ...company
    }

    delete foundCompany['password']

    return foundCompany;
  }
}