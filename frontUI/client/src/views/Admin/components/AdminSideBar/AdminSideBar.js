import React, { useState } from 'react';
import { useStyles } from './Style';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import {
  Typography,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  AppBar,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';
import { parse } from 'query-string';
import { Link } from 'react-router-dom';

const AllPlans = props => {
  return <Typography>This is all Plans</Typography>;
};
const CreatePlan = props => {
  return <Typography>This is Create Plan</Typography>;
};
const AllCategories = props => {
  return <Typography>This is all Categories</Typography>;
};
const CreateCategory = props => {
  return <Typography>This is Create Category</Typography>;
};
const AllFeatures = props => {
  return <Typography>This is all Features</Typography>;
};
const CreateFeature = props => {
  return <Typography>This is Create Feature</Typography>;
};

const Display = props => {
  const { children, value, index, ...other } = props;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const AdminSideBar = props => {
  const { pages, ...rest } = props;

  const [plans, setPlans] = useState(pages.planPages.children.page);
  const [categories, setCategories] = useState(
    pages.categoryPages.children.page,
  );
  const [features, setFeatures] = useState(pages.featuresPages.children.page);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let pageId = parse(window.location.search).pid || 'all_plans';
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 20 }}
          >
            {pages.planPages.title}
          </Typography>
          {plans.map(res => (
            <Link key={res.id} to={res.to}>
              <ListItem>
                {res.icon}&nbsp;&nbsp;&nbsp;
                <ListItemText primary={res.title}></ListItemText>
              </ListItem>
            </Link>
          ))}
          <Divider />
          <br />
          <Typography
            variant="subtitle2"
            style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 20 }}
          >
            {pages.categoryPages.title}
          </Typography>
          {categories.map(res => (
            <Link key={res.id} to={res.to}>
              <ListItem>
                {res.icon}&nbsp;&nbsp;&nbsp;
                <ListItemText primary={res.title}></ListItemText>
              </ListItem>
            </Link>
          ))}
          <Divider />
          <br />
          <Typography
            variant="subtitle2"
            style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 20 }}
          >
            {pages.featuresPages.title}
          </Typography>
          {features.map(res => (
            <Link key={res.id} to={res.to}>
              <ListItem>
                {res.icon}&nbsp;&nbsp;&nbsp;
                <ListItemText primary={res.title}></ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Display value={pageId} index={'all_plans'}>
          <AllPlans />
        </Display>
        <Display value={pageId} index={'create_plan'}>
          <CreatePlan />
        </Display>
        <Display value={pageId} index={'all_categories'}>
          <AllCategories />
        </Display>
        <Display value={pageId} index={'create_category'}>
          <CreateCategory />
        </Display>
        <Display value={pageId} index={'all_features'}>
          <AllFeatures />
        </Display>
        <Display value={pageId} index={'create_feature'}>
          <CreateFeature />
        </Display>
      </main>
    </div>
  );
};

AdminSideBar.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default AdminSideBar;
