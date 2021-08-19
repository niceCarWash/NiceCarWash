import React from 'react';
import { useStyles } from './Style';
import { Divider, Typography, Grid } from '@material-ui/core';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { About, Features, PlanCard } from './components';
import { customizations, featuredProducts } from './data';
import Loading from '../Loading/Loading';
import { useAxiosGet } from 'hooks/useGetPlan';
const IndexView = () => {
  const classes = useStyles();
  const url = `${process.env.REACT_APP_API}/plans`;
  let plans = useAxiosGet(url);

  let content = null;

  if (plans.error) {
    content = (
      <Section>
        <Typography>There is an error in loading the plans</Typography>
      </Section>
    );
  }

  if (plans.loading) {
    content = (
      <div>
        <Loading />
      </div>
    );
  }

  if (plans.data) {
    content = plans.data.map(plan => (
      <PlanCard key={plan._id} plan={plan}></PlanCard>
    ));
  }
  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <About />
        <Section>
          <Divider />
        </Section>

        <Section>{content}</Section>
      </Section>
      <Divider />
    </div>
  );
};

export default IndexView;
