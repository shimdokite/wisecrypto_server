import { setCookie } from 'cookies-next';

import instance from '../../_shared/api/instance';

import { LoginInfo } from '../_types/data';

export const postUserCredentials = async (login: LoginInfo) => {
  const response = await instance.post('/login', login);

  const userId = response.data.id;
  setCookie('userId', userId);

  return response;
};
