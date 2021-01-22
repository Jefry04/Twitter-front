import React from 'react';
import NavBar from './containers/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateUsers from './pages/CreateUsers';
import SingleTweet from './pages/SingleTweet';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/tweets/:id" component={SingleTweet} />
          <Route path="/CreateUsers" component={CreateUsers} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
