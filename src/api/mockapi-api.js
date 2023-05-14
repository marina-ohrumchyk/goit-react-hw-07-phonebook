import axios from 'axios';

axios.defaults.baseURL = 'https://645f887dca2d89f7e7489b7e.mockapi.io';

export const getContacts = async () => {
  try {
    const result = await axios.get('/contacts');
    return result;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async newData => {
  try {
    const result = await axios.post('/contacts', newData);
    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
 
};

export const delContact = async id => {
  try {
    const result = await axios.delete(`/contacts/${id}`);
    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
