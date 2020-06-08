import makeCompany from '../entity';

export default function makePostCompany({ HttpClient }) {
  return async function postCompany(data) {
    const company = makeCompany(data);

    console.log(company)

    const httpDetails = { url: '/company', data: JSON.stringify(company) };

    const response = await HttpClient.post(httpDetails);

    console.log("response", response)

    if (response.status === 'error') throw new Error(response.message);

    return response;
  };
}
