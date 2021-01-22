const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export function login({ username = '', password = '' }) {
  return fetch(`${BASE_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { success, items = [] } = data;

      if (success) {
        const [item = {}] = items;
        const { token = '', user = {} } = item;
        localStorage.setItem('token', token);
        return Promise.resolve(user);
      } else {
        const { message = '' } = data;

        return Promise.reject(message);
      }
    });
}

export function createUsers({
  name = '',
  username = '',
  email = '',
  password = '',
  passwordConfirmation = '',
}) {
  return fetch(`${BASE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
      passwordConfirmation,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { success, items = [] } = data;

      if (success) {
        const [item = {}] = items;
        const {
          name = '',
          username = '',
          email = '',
          password = '',
          passwordConfirmation = '',
        } = item;

        return Promise.resolve(
          name,
          username,
          email,
          password,
          passwordConfirmation
        );
      } else {
        const { message = '' } = data;

        return Promise.reject(message);
      }
    });
}