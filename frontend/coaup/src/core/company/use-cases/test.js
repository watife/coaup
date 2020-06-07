return async function test (data) {
  const company = makeCompany(data)

  const httpDetails = {url: '/company', data: company}
  
  const response = await HttpClient.post(httpDetails);
  
  return response;
}