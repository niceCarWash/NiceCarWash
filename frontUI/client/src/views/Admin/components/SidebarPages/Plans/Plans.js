import React from 'react';
import { Typography } from '@material-ui/core';
import Loading from 'views/Loading/Loading';
import { Section } from 'components/organisms';
import { PlanCard } from 'views/ServicesIndex/components';
import { useAxiosGet } from 'hooks/useGetPlan';
const AllPlans = props => {
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
  return <div>{content}</div>;
};

export default AllPlans;
