import { initialState } from './state';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...action.payload,
      };
    }
    case 'UNSET_USER': {
      return {
        username: '',
        name: '',
        email: '',
      };
    }
    default:
      return state;
  }
}
