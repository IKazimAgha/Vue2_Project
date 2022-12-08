import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllLeaves = async () => {
  const result = await axios.get(`${BASE_URL}/leaves`);
  console.log({ result });
  return result.data;
};

export const createLeave = async (leaveData) => {
  const result = await axios.post(`${BASE_URL}/leaves`, leaveData);
  console.log({ result });
};
