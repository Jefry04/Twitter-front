import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../containers/UserContext';
import * as Auth from '../utils/auth';

export default function SignOut() {
  const context = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    Auth.clearToken();
    context.setUser(null);
    history.push('/');
  }, [context, history]);

  return null;
}
