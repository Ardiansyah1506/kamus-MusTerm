import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
});

axios.interceptors.request.use(request => {
  return request;
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('Error:', error);
  return Promise.reject(error);
});

export default axios;
