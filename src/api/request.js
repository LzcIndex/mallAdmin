import axios from 'axios';

const request = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

request.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

request.interceptors.response.use(
  (resp) => resp.data.data,
  (err) => Promise.reject(err),
);

export default request;
