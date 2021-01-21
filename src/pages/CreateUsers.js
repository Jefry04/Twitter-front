import React from 'react';
import API from '../api';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

export default function CreateUsers({ history }) {
  const classes = useStyles();

  async function submit(e) {
    e.preventDefault();
    const {
      name,
      username,
      password,
      passwordConfirmation,
      email,
    } = e.target.elements;
    try {
      await API.createUsers({
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      });
      history.push('/');
    } catch (error) {
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
        Sign UP
      </Typography>
      <form onSubmit={submit}>
        <TextField
          label="Name:"
          variant="outlined"
          name="name"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Username:"
          variant="outlined"
          name="username"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Email:"
          variant="outlined"
          name="email"
          type="mail"
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
        <TextField
          label="Password Confirmation:"
          variant="outlined"
          name="passwordConfirmation"
          type="password"
          fullWidth
          className={classes.input}
        />

        <Button variant="contained" color="primary" type="submit">
          Sign UP
        </Button>
      </form>
    </React.Fragment>
  );
}
