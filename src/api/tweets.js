import * as Auth from '../utils/auth';
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export function getTweets() {
  return fetch(`${BASE_API_URL}/tweets`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { success, items = [] } = data;
      const [item = {}] = items;
      const { tweets = [] } = item;
      if (success) {
        return Promise.resolve(tweets);
      } else {
        const { message = '' } = data;
        return Promise.reject(message);
      }
    });
}
export function getTweet({ id }) {
  return fetch(`${BASE_API_URL}/tweets/${id}`)
    .then((response) => response.json())
    .then((response) => {
      const { items: [data = {}] = [] } = response;
      return data;
    });
}

export function newTweet({ content = '' }) {
  const token = Auth.getToken();

  return fetch(`${BASE_API_URL}/tweets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify({
      content,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { success } = data;

      if (success) {
        return Promise.resolve();
      } else {
        const { message = '' } = data;

        return Promise.reject(message);
      }
    });
}
