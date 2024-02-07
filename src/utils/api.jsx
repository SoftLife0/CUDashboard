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
    return response.data; //For POST requests, data is typically sent in the request body, so we pass the data directly to api.post
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};

const getMessages = async (userId, token) => {
  try {
    const requestData = {userId, token};
    const response = await api.get('/mymessages', {
      params: requestData //For GET requests, data is often sent as query parameters in the URL, so we use the params option in Axios to specify these query parameters.
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};

const getAllocationData = async (userId, token) => {
  try {
    const requestData = { userId, token };
    const response = await api.get('/allocation', {
      params: requestData // ask kweku to teach me 
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching allocation data: ${error.message}`);
  }
};

export { getUserData };