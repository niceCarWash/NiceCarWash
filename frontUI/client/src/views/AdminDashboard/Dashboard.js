import React from 'react';
import clsx from 'clsx';
import { useStyles } from './Style';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { parse } from 'query-string';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ToggleOn, ToggleOff } from '@material-ui/icons/';
import { subPages } from './components/listItems';
import { Chart, Deposits, Orders, Services } from './components';

export default function Dashboard() {
  let pageId = parse(window.location.search).pid || 'users';
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleOpenAndCLose = open => {
    if (open) return handleDrawerClose;
    else return handleDrawerOpen;
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleOpenAndCLose(open)}>
            {open && <ToggleOff />}
            {!open && <ToggleOn />}
          </IconButton>
        </div>
        <Divider />
        <List disablePadding>
          {subPages.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.href}
              disableGutters
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                value={pageId}
                index={'services'}
                className={classes.paper}
              >
                <Services />
              </Paper>
              <Paper
                value={pageId}
                index={'subscriptions'}
                className={classes.paper}
              ></Paper>
              <Paper
                value={pageId}
                index={'users'}
                className={classes.paper}
              ></Paper>
              <Paper
                value={pageId}
                index={'insights'}
                className={classes.paper}
              ></Paper>
              <Paper
                value={pageId}
                index={'invoices'}
                className={classes.paper}
              ></Paper>
              <Paper
                value={pageId}
                index={'reviews'}
                className={classes.paper}
              ></Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
