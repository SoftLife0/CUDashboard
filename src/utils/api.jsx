import axios from 'axios';

const API_BASE_URL = 'http://172.16.12.221:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const getUserData = async (userId, token) => {
  try {
    const requestData = { userId, token };
    const response = await api.post('/dashboard', requestData);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};

export { getUserData };