import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function AdminRoutes({ children, ...rest }) {
  const { auth } = useSelector(state => ({ ...state }));
  let user = auth;

  return user && user.role === 'admin' ? (
    <Route {...rest} />
  ) : (
    <Redirect to="/login" />
  );
}
