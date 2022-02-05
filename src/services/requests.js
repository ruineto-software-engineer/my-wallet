import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function getBalance(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/balance`, config);

  return promise;
}

function postInput(body, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/input`, body, config);

  return promise;
}

function postOutput(body, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/output`, body, config);

  return promise;
}

const requests = {
  signIn,
  signUp,
  getBalance,
  postInput,
  postOutput
}

export default requests;