import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component, isLoggedIn, ...props }) => {

  if (!isLoggedIn) {
    return <Redirect to="/login"/>;
  }

  return (
    <Route
      { ...props }
      component={ component }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default connect(state => ({ isLoggedIn: 'getLoginState' }))(ProtectedRoute);

