import React, { useState } from 'react';
import API from '../api';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

function Login({ history, setUser }) {
  const [error, setError] = useState(false);
  const classes = useStyles();
  // const context = useContext(UserContext);

  async function submit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
      const user = await API.login({
        username: username.value,
        password: password.value,
      });
      setUser({
        username: username.value,
        ...user,
      });
      setError(false);
      history.push('/');
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        component="h2"
        className={classes.title}
        gutterBottom
      >
        Login
      </Typography>
      {error && (
        <Alert severity="warning">Incorrect username or password</Alert>
      )}
      <form onSubmit={submit}>
        <TextField
          label="Username:"
          variant="outlined"
          name="username"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Password:"
          variant="outlined"
          name="password"
          type="password"
          fullWidth
          className={classes.input}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (payload) => {
      dispatch({
        type: 'SET_USER',
        payload,
      });
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
