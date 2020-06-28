import makeCompany from '../entity'

export default function makeLoginCompany({ HttpClient }) {
  return async function loginCompany(data) {
    const company = makeCompany(data)

    const httpDetails = {
      url: '/company/auth',
      data: JSON.stringify(company)
    }

    const response = await HttpClient.post(httpDetails)

    if (response.status === 'error') throw new Error(response.message)

    return response
  }
}
