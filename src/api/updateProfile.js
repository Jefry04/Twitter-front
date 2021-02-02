import http from './http';
import * as Auth from '../utils/auth';
export async function updateProfile({ username, name, email }) {
  return await http
    .put(
      `/users/${username}`,
      {
        name: name,
        email: email,
      },
      {
        headers: {
          'x-access-token': Auth.getToken(),
        },
      }
    )
    .then((response) => {
      const { items = {} } = response;
      const { name = '', password = '', email = '' } = items;
      const profile = { name, password, email };
      return profile;
    });
}
