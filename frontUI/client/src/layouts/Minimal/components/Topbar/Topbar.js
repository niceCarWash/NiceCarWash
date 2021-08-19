import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { Image } from 'components/atoms';
import Logo from '../../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
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
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
