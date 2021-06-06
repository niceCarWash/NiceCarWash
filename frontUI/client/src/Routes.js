/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import LinearDeterminate from './views/Loading/Loading';
//Using Lazy Load
const Services = React.lazy(() => import('./views/ServicesIndex'));
const Register = React.lazy(() => import('./views/Register'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Login = React.lazy(() => import('./views/Login'));
const Account = React.lazy(() => import('./views/Account'));
const PasswordRest = React.lazy(() => import('./views/Password-Rest'));
const Prices = React.lazy(() => import('./views/Pricing'));
const About = React.lazy(() => import('./views/AboutSideCover'));
const Contact = React.lazy(() => import('./views/ContactPageCover'));
const OrderPage = React.lazy(() => import('./views/Orders'));
const Routes = () => {
  return (
    <React.Suspense
      fallback={
        <div>
          <LinearDeterminate />
        </div>
      }
    >
      <Switch>
        <Route
          exact
          path="/"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={Services}
              layout={MainLayout}
            />
          )}
        />
        <PublicRoutes
          exact
          path="/register"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={Register}
              layout={MainLayout}
            />
          )}
        />
        <UserRoutes
          exact
          path="/account"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={Account}
              layout={MainLayout}
            />
          )}
        />
        <PublicRoutes
          exact
          path="/login"
          render={matchProps => (
            <WithLayout {...matchProps} component={Login} layout={MainLayout} />
          )}
        />
        <Route
          exact
          path="/plans"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={Prices}
              layout={MainLayout}
            />
          )}
        />
        <Route
          exact
          path="/service_order"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={OrderPage}
              layout={MainLayout}
            />
          )}
        />
        <Route
          exact
          path="/password_reset"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={PasswordRest}
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
              component={NotFound}
              layout={MinimalLayout}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={matchProps => (
            <WithLayout {...matchProps} component={About} layout={MainLayout} />
          )}
        />
        <Route
          exact
          path="/contact"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={Contact}
              layout={MainLayout}
            />
          )}
        />

        <Redirect to="/not-found" />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
