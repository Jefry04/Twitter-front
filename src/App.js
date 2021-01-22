import React, { Suspense } from 'react';
import NavBar from './containers/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));
const CreateUsers = React.lazy(() => import('./pages/CreateUsers'));

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/tweets/:id" component={SingleTweet} />
            <Route path="/CreateUsers" component={CreateUsers} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
