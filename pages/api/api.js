import axios from "axios"
const BASE_URL = 'http://localhost:8000'

function getAccessToken() {
    return localStorage.getItem('accessToken')
}
  
function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken)
}

async function fetchWithToken(url, options = {}) {
  try {
    const response = await axios(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, { email, password });
  
      const responseJson = response.data;
  
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
      }
  
      return { error: false, data: responseJson.data };
    } catch (error) {
      throw error;
    }
}

async function register({ name, email, password, password_confirmation }) {
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, { name, email, password, password_confirmation });
  
      const responseJson = response.data;
  
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
      }
  
      return { error: false };
    } catch (error) {
      throw error;
    }
}
  
export { register }