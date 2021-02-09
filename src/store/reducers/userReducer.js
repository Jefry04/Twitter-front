import { initialState } from '../state';

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'UNSET_USER': {
      return {
        ...state,
        user: {
          username: '',
          name: '',
          email: '',
        },
      };
    }
    default:
      return state;
  }
}
