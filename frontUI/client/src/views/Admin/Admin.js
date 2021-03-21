import React from 'react';
import clsx from 'clsx';
import { parse } from 'query-string';
import { useStyles } from './Style';
import { authFirbase } from '../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { Box, List, ListItem, Grid, Typography } from '@material-ui/core';
import { SectionAlternate, CardBase } from 'components/organisms';
import { Hero } from './components';
import { Link } from 'react-router-dom';
import { services } from './data';
import jsonServerProvider from 'ra-data-json-server';
import { createHashHistory } from 'history';

const subPages = [
  {
    id: 'services',
    href: '/admin/?pid=services',
    title: 'Services',
  },
  {
    id: 'subscriptions',
    href: '/admin/?pid=subscriptions',
    title: 'Subscriptions',
  },
  {
    id: 'users',
    href: '/admin/?pid=users',
    title: 'Users',
  },
  {
    id: 'insights',
    href: '/admin/?pid=insights',
    title: 'Insights',
  },
  {
    id: 'invoices',
    href: '/admin/?pid=invoices',
    title: 'Invoices',
  },
  {
    id: 'reviews',
    href: '/admin/?pid=reviews',
    title: 'Reviews',
  },
];

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  // Load Auth From Redux Store
  const { auth } = useSelector(state => ({ ...state }));
  let user = !!auth;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const AdminRoute = (props = {}) => {
  const classes = useStyles();
  let pageId = parse(window.location.search).pid || 'general';

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={item.href}
                    className={clsx(
                      classes.listItem,
                      pageId === item.id ? classes.listItemActive : {},
                    )}
                    disableGutters
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color="textSecondary"
                      className="menu__item"
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={'services'}></TabPanel>
              <TabPanel value={pageId} index={'security'}></TabPanel>
              <TabPanel value={pageId} index={'notifications'}></TabPanel>
              <TabPanel value={pageId} index={'billing'}></TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default AdminRoute;
