import React from 'react';
import { useStyles } from './Style';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, ContactForm } from 'components/organisms';
import {
  About,
  Advantages,
  Features,
  Integrations,
  Reviews,
  Team,
  VideoSection,
} from './components';

import {
  partners,
  advantages,
  reviews,
  integrations,
  customizations,
  team,
} from './data';

const IndexView = () => {
  const classes = useStyles();

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
        <>
          <About data={partners} />
          <Section>
            <Divider />
          </Section>
          <VideoSection />
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
          <Integrations data={integrations} />
          <Section>
            <Divider />
          </Section>
          <Features data={customizations} />
          <Section>
            <Divider />
          </Section>
          <Team data={team} />
        </>
      </Section>
      <Divider />
      <AppBar position="fixed" className={classes.appBarBottom}>
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
      </AppBar>
    </div>
  );
};

export default IndexView;
