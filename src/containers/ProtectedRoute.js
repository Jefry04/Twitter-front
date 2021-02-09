import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from '../utils/auth';
import { connect } from 'react-redux';

function ProtectedRoute({ path, component: Component, user }) {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (Auth.isAuthenticaded() && user.username) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
