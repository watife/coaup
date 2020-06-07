export default function makeGetCompanies({ HttpClient }) {
  return async function getCompanies () {

    const httpDetails = {url: '/company'}
    
    const response = await HttpClient.get(httpDetails)
    
    return response;
  }
}