import userReducer from './user/reducer';
import tweetsReducer from './tweets/reducer';

const reducers = {
  user: userReducer,
  tweets: tweetsReducer,
};

export default reducers;
