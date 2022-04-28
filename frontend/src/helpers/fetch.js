import { apiUrl } from '../config';

export const fetchWithToken = (endpoint, data, method = 'GET') => {
  const url = `${apiUrl}${endpoint}`;
  const token = localStorage.getItem('token') || '';

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  if (method === 'GET') {
    return fetch(url, {
      headers,
    });
  }
  if (method === 'DELETE') {
    return fetch(url, {
      method,
      headers,
    });
  }else {
    return fetch(url, {
      body: JSON.stringify(data),
      method,
      headers,
    });
  }
};
