export const blankState = {
  username: '',
  name: '',
  email: '',
};

let initialState = blankState;

const storedState = localStorage.getItem('state');
if (storedState) {
  initialState = JSON.parse(storedState).user;
}

export { initialState };
