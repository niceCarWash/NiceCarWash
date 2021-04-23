/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { authFirbase } from '../../../../../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyles } from './Style';
import {
  List,
  ListItem,
  Typography,
  Divider,
  ListItemIcon,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from 'react-router-dom';

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;

  let dispatch = useDispatch();
  let history = useHistory();
  const firebaseLogOut = () => {
    localStorage.removeItem('persist:root');
    authFirbase.signOut();
    dispatch({
      type: 'CLEAN_UP',
      payload: null,
      loading: false,
    });
    history.push('/');
  };
  // Load Auth From Redux Store
  const { auth } = useSelector(state => ({ ...state }));
  let user = !!auth;
  const classes = useStyles();

  const products = pages.products;
  const aboutUs = pages.aboutUs;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={Link}
              to={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textPrimary"
              onClick={() => onClose()}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const ButtonLogOut = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        <Typography
          variant="body1"
          className={clsx(classes.navLink, 'submenu-item')}
          color="textSecondary"
          onClick={firebaseLogOut}
        >
          {item.pages[0].title}
        </Typography>
      </List>
    );
  };
  const ProductPages = () => {
    const { productsRoutes } = products.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={productsRoutes} />
        </div>
      </div>
    );
  };

  const AboutUsPages = () => {
    const { aboutUsRoutes } = aboutUs.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={aboutUsRoutes} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, logout } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          {user && <MenuGroup item={settings} />}
        </div>
        <div className={classes.menuItem}>
          {!user && (
            <div>
              <MenuGroup item={signup} />
              <MenuGroup item={signin} />
            </div>
          )}
          {user && <ButtonLogOut item={logout} />}
        </div>
      </div>
    );
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Products
        </Typography>
        <ProductPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          About Us
        </Typography>
        <AboutUsPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography>
        <AccountPages />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
