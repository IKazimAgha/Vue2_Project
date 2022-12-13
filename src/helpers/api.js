import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllLeaves = async (email) => {
  const result = await axios.get(`${BASE_URL}/leaves/${email}`);
  return result.data;
};

export const createUser = async (users) => {
  const result = await axios.post(`${BASE_URL}/users`, users);
  return result.data;
};

export const createLeave = async (leaveData) => {
  const result = await axios.post(`${BASE_URL}/leaves`, leaveData);
  console.log({ result });
};

export const deleteLeave = async (leaveId) => {
  const result = await axios.delete(`${BASE_URL}/leaves/${leaveId}`);
  console.log({ result });
};
