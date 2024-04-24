export type signForm = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  passwordCheck?: string;
  position?: string;
  check?: boolean;
};

export interface CreateAccount {
  name: string;
  phoneNumber: string;
  position: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}
