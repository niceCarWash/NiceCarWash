/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  IndexView,
  Register as RegisterView,
  NotFound as NotFoundView,
  RegisterComplete as ResgisterCompleteView,
  Login as LoginView,
  Account as AccountView,
  PasswordRest as PasswordRestView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/register"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={RegisterView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/account"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AccountView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={LoginView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/register/complete"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ResgisterCompleteView}
            layout={MinimalLayout}
          />
        )}
      />
      <UserRoutes
        exact
        path="/password_reset"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PasswordRestView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MinimalLayout}
          />
        )}
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
