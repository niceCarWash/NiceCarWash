import React from 'react';
import { useStyles } from './Style';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  Grid,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, ContactForm } from 'components/organisms';
import { About, Advantages, Features, Reviews } from './components';

import { advantages, reviews, customizations } from './data';
import { SectionHeader } from 'components/molecules';
const IndexView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Grid container justify="space-between" spacing={isMd ? 4 : 0}>
          <Grid item xs={12} md={6} data-aos={'fade-up'}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <SectionHeader
                  title={
                    <span style={{ alignContent: 'center' }}>
                      Webbplatsen är under uppbyggnad. Tack för ditt besök. den
                      kommer igång snart.{' '}
                      <Typography
                        component="span"
                        variant="inherit"
                        color="primary"
                      >
                        Håll dig uppdaterad!
                      </Typography>{' '}
                    </span>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Section>
          <Divider />
        </Section>
        <About />
        <Section>
          <Divider />
        </Section>
        <Advantages data={advantages} />
        <Section>
          <Divider />
        </Section>
        <Reviews data={reviews} />
        <Section>
          <Divider />
        </Section>
        <Features data={customizations} />
      </Section>
      <Divider />
      {/* <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default IndexView;
