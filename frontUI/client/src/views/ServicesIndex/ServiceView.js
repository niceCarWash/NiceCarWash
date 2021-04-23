import React from 'react';
import { useStyles } from './Style';
import { Divider } from '@material-ui/core';

import { Section } from 'components/organisms';
import { About, Reviews, Features } from './components';

import { reviews, customizations } from './data';
const IndexView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <About />
        <Section>
          <Divider />
        </Section>
        <Features data={customizations} />
        {/* <Advantages data={advantages} /> */}
        <Section>
          <Divider />
        </Section>
        <Reviews data={reviews} />
        <Section>
          <Divider />
        </Section>
        {/* <Features data={customizations} />
        <Section>
          <Divider />
        </Section> */}
      </Section>
      <Divider />
    </div>
  );
};

export default IndexView;
