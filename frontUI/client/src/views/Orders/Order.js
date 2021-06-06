import React from 'react';
import { parse } from 'query-string';
import { useStyles } from './Style';
// import { authFirbase } from '../../Firebase';
// import {  useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import { SectionAlternate, CardBase } from 'components/organisms';
import { Hero, General } from './components';




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

const Order = (props = {}) => {
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

export default Order;
