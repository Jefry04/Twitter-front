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
