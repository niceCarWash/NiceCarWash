import React from 'react';
import clsx from 'clsx';
import { parse } from 'query-string';
import { useStyles } from './Style';
// import { authFirbase } from '../../Firebase';
// import {  useSelector } from 'react-redux';
import { Box, List, ListItem, Grid, Typography } from '@material-ui/core';
import { SectionAlternate, CardBase } from 'components/organisms';
import { Hero, General } from './components';
import { Link } from 'react-router-dom';

const subPages = [
  {
    id: 'general',
    href: '/account/?pid=general',
    title: 'General',
  },
  {
    id: 'security',
    href: '/account/?pid=security',
    title: 'Security',
  },
  {
    id: 'notifications',
    href: '/account/?pid=notifications',
    title: 'Notifications',
  },
  {
    id: 'billing',
    href: '/account/?pid=billing',
    title: 'Billing Information',
  },
];

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  // // Load Auth From Redux Store
  // const { auth } = useSelector(state => ({ ...state }));
  // let user = !!auth;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const Account = (props = {}) => {
  const classes = useStyles();
  let pageId = parse(window.location.search).pid || 'general';

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={'general'}>
                <General />
              </TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default Account;
