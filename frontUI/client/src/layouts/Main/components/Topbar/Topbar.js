import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { authFirbase } from 'Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Style';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../../assets/images/Logo.png';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';
const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
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
  let user = auth;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const products = pages.products;
  const aboutUs = pages.aboutUs;
  const account = pages.account;
  const classes = useStyles();
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
              variant="body1"
              component={Link}
              to={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
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
          {user === null && (
            <div>
              <MenuGroup item={signup} />
              <MenuGroup item={signin} />
            </div>
          )}
          {user != null && <ButtonLogOut item={logout} />}
          {}
        </div>
        <div className={classes.menuItem}>
          {user && <MenuGroup item={settings} />}
        </div>
      </div>
    );
  };

  const renderPages = id => {
    if (id === 'services') {
      return <ProductPages />;
    }
    if (id === 'aboutUs') {
      return <AboutUsPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      {/* Here is the Logo Part  */}
      <div className={classes.logoContainer}>
        <Link to="/" title="Nice Car Wash">
          <Image
            className={classes.logoImage}
            src={themeMode === 'light' ? Logo : Logo}
            alt="Nice Car Wash"
            lazy={false}
          />
        </Link>
      </div>
      {/* End of Logo Part */}

      {/* Navbar items  */}
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {[products, aboutUs, account].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ''
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages(page.id)}</div>
              </Popover>
            </div>
          ))}
          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
