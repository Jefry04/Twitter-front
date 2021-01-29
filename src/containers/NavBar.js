import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { UserConsumer } from './UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <ListItem component={NavLink} to="/">
            <Typography variant="h6" className={classes.title}>
              Twitter
            </Typography>
          </ListItem>
          <UserConsumer>
            {({ user }) => {
              if (user) {
                return (
                  <>
                    <ListItem component={NavLink} to="/">
                      <Button className={classes.title}>{user.name}</Button>
                    </ListItem>
                    <ListItem component={NavLink} to="/signout">
                      <Button className={classes.title}>SignOut</Button>
                    </ListItem>
                  </>
                );
              } else {
                return (
                  <>
                    <ListItem component={NavLink} to="/CreateUsers">
                      <Button className={classes.title}>Sign Up</Button>
                    </ListItem>
                    <ListItem component={NavLink} to="/login">
                      <Button className={classes.title}>Login</Button>
                    </ListItem>
                  </>
                );
              }
            }}
          </UserConsumer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
