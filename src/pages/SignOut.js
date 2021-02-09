import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Auth from '../utils/auth';

function SignOut({ unsetUser }) {
  const history = useHistory();

  useEffect(() => {
    Auth.clearToken();
    unsetUser();
    history.push('/');
  }, [history, unsetUser]);

  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetUser: () => {
      dispatch({
        type: 'UNSET_USER',
      });
    },
  };
};

export default connect(undefined, mapDispatchToProps)(SignOut);
