import axios from 'axios';

const request = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

request.interceptors.request(() => {}, (err) => Promise.reject(err));

request.interceptors.response(() => {}, (err) => Promise.reject(err));
