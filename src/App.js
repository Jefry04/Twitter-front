import React, { Suspense } from 'react';
import NavBar from './containers/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const CreateUsers = React.lazy(() => import('./pages/CreateUsers'));
const New = React.lazy(() => import('./pages/New'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/CreateUsers" component={CreateUsers} />
            <ProtectedRoute path="/new" component={New} />
            <Route path="/tweets/:id" component={SingleTweet} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
