import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    products: {
      title: 'Services',
      id: 'services',
      children: {
        productsRoutes: {
          groupTitle: 'Our Services',
          pages: [
            {
              title: 'Our Plans',
              href: '/plans',
            },
            {
              title: 'Our Services',
              href: '/Services',
            },
          ],
        },
      },
    },

    aboutUs: {
      title: 'About us',
      id: 'aboutUs',
      children: {
        aboutUsRoutes: {
          groupTitle: 'About Us',
          pages: [
            {
              title: 'Who We Are',
              href: '/about/',
            },
            {
              title: 'Contact Us ',
              href: '/contact',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'Account Settings',
              href: '/account',
            },
          ],
        },
        signup: {
          groupTitle: 'No Customer?',
          pages: [
            {
              title: 'Sing Up',
              href: '/register',
            },
          ],
        },
        signin: {
          groupTitle: 'Customer?',
          pages: [
            {
              title: 'Sign In',
              href: '/login',
            },
          ],
        },
        logout: {
          groupTitle: 'Leave The Site',
          pages: [
            {
              title: 'Log Out',
              href: '/',
            },
          ],
        },
        admin: {
          groupTitle: 'Admin Routes',
          pages: [
            {
              title: 'Admin',
              href: '/admin',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
