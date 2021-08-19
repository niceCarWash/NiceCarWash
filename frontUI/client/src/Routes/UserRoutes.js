import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function UserRoutes({ children, ...rest }) {
  const { auth } = useSelector(state => ({ ...state }));
  let user = auth;

  return user && user.role === 'subscriber' ? (
    <Route {...rest} />
  ) : (
    <Redirect to="/login" />
  );
}
