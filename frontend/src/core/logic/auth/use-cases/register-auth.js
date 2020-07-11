export default function makeNewAuthUser({ HttpClient }) {
  return async function newAuthUser(data) {
    const httpDetails = {
      url: '/auth',
      data: JSON.stringify(data)
    }

    const response = await HttpClient.post(httpDetails)

    if (response.status === 'error') throw new Error(response.message)

    return response
  }
}
