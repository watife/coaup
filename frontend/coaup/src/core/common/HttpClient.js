import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

const MakeHttpClient = () => {

  const get = async ({ url, config }) => {
    try {
      const response = await http.get(url, config);
      return response.data;
    } catch (e) {
      throw new Error(e.response)
    }
  }

  const post = async ({ url, data, config }) => {
    try {
      const response = await http.post(url, data, config);
      return response;
    } catch (e) {
      return e.response.data
    }

  }

  const put = async ({ url, data, config }) => {
    try {
      const response = await http.put(url, data, config);
      return response.data;
    } catch (e) {
      return e.response
    }
  }

  const remove = async ({ url, config }) => {
    const response = await http.put(url, config);
    return response.data;
  }

  return Object.freeze({
    get,
    post,
    put,
    remove
  })
}

const HttpClient = MakeHttpClient();

export default HttpClient;
