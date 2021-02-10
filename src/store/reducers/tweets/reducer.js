import { initialState } from './state';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TWEETS': {
      return {
        items: action.payload,
      };
    }
    default:
      return state;
  }
}
