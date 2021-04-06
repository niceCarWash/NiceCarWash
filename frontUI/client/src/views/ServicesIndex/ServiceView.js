import React from 'react';
import { useStyles } from './Style';
import { Divider } from '@material-ui/core';

import { Section } from 'components/organisms';
import { About, Advantages, Reviews } from './components';

import { advantages, reviews } from './data';
const IndexView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
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
      </Section>
      <Divider />
    </div>
  );
};

export default IndexView;
