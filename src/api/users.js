import http from './http';
import * as Auth from '../utils/auth';

export function login({ username = '', password = '' }) {
  return http
    .post('/users/login', {
      username,
      password,
    })
    .then((response) => {
   
      const { data = {} } = response;
      const { items = [] } = data;
      const [item = {}] = items;
      const { token = '', user = {} } = item;
      Auth.setToken({ token });
      const payload = user;

      return payload;
    });
}

export function createUsers({
  name = '',
  username = '',
  email = '',
  password = '',
  passwordConfirmation = '',
}) {
  return http.post('/users', {
    name,
    username,
    email,
    password,
    passwordConfirmation,
  });
}
