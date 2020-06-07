import makeCompany from '../entity';

export default function makePostCompany({ HttpClient }) {
  return async function postCompany (data) {
    const company = makeCompany(data)

    const httpDetails = {url: '/company', data: company}
    
    const response = await HttpClient.post(httpDetails);
    
    return response;
  }
}