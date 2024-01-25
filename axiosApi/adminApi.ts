import axios from 'axios';

const adminApi = axios.create({
  baseURL: '/api/protected/admin',
});

export default adminApi;
