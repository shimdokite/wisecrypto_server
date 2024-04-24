import axios from 'axios';
import { setCookie } from 'cookies-next';

import { CreateAccount, Login } from 'types/data';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const postUserCredentials = async (login: Login) => {
  const response = await instance.post('/login', login);

  const userId = response.data.id;
  setCookie('userId', userId);

  return response;
};

export const postNewUserInfomation = async (createAccount: CreateAccount) => {
  const response = await instance.post('/register', createAccount);

  return response;
};
