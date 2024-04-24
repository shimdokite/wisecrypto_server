import instance from '../../_shared/api/instance';

import { CreateAccount } from '../_types/data';

export const postNewUserInfomation = async (createAccount: CreateAccount) => {
  const response = await instance.post('/register', createAccount);

  return response;
};
