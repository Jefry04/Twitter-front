import http from './http';
import * as Auth from '../utils/auth';
export function updateProfile({ username = '', name = '', email = '' }) {
  return http.put(
    `/users/${username}`,
    {
      name,
      email,
    },

    {
      headers: {
        'x-access-token': Auth.getToken(),
      },
    }
  );
}
