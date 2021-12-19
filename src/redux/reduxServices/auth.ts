import {API_URL} from '../../config/api';
import {authHeader} from '../../helpers/auth_header';
import {USER} from '../../helpers/interfaces/user';

/*
 * Method: POST
 * Desc: Register User
 * Params: user = {
 *  firstName
 *  lastName
 *  company
 *  phone
 *  email
 *  password
 * }
 * */

export const userRegister = async (user: USER) => {
  const headers = await authHeader();

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      password_confirmation: user.password_confirmation,
      email_confirmation: user.email_confirmation,
      password: user.password,
      email: user.email,
    }),
  };
  // @ts-ignore
  return fetch(`${API_URL}/users/register`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    });
};

/*
 * Method: POST
 * Desc: Login User
 * Params:
 *  email
 *  password
 * */
export const userLogin = async (email: string, password: string) => {
  const headers = await authHeader();

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  };
  // @ts-ignore
  return fetch(`${API_URL}/users/login`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    });
};

/*
 * Method: GET
 * Desc: load logged User
 * */
export const userFetch = async () => {
  const headers = await authHeader();

  const requestOptions = {
    method: 'GET',
    headers,
  };
  // @ts-ignore
  return fetch(`${API_URL}/users/me`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    });
};

/*
 * Method: POST
 * Desc: Update User
 * Params: user = {
 *  firstName
 *  lastName
 *  company
 *  phone
 *  email
 *  password
 * }
 * */
export const userUpdate = async (user: USER) => {
  const headers = await authHeader();

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      user,
    }),
  };
  // @ts-ignore
  return fetch(`${API_URL}/users/update`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    });
};

/*
 * Method: GET
 * Desc: logout User
 * */
export const userLogout = async () => {
  const headers = await authHeader();

  const requestOptions = {
    method: 'GET',
    headers,
  };
  // @ts-ignore
  return fetch(`${API_URL}/users/logout`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    });
};
