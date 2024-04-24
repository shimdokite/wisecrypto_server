import { setCookie } from 'cookies-next';

import instance from '../../_shared/api/instance';

import { Login } from '../_types/data';

export const postUserCredentials = async (login: Login) => {
  const response = await instance.post('/login', login);

  const userId = response.data.id;
  setCookie('userId', userId);

  return response;
};
