import * as tweets from './tweets';
import * as users from './users';
import * as profile from './getProfile';
import * as newProfile from './updateProfile';

const API = {
  ...tweets,
  ...users,
  ...profile,
  ...newProfile,
};
window.API = API;
export default API;
