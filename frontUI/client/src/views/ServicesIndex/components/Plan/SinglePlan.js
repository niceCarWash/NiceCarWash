import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// material
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { getPlan } from 'redux/actions/plan-actions/planActions';
import { Link } from 'react-router-dom';
import PlanDetails from '../PlanDetails';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10),
  [theme.breakpoints.up(1368)]: {
    padding: theme.spacing(5, 8),
  },
}));

const SinglePlan = ({ match }) => {
  const { slug } = match.params;
  const [plans, setPlans] = useState({
    data: null,
    loading: false,
    error: null,
  });

  let content = '';

  useEffect(() => {
    loadPlan(slug);
  }, [slug]);

  const loadPlan = slug => {
    setPlans({
      loading: true,
      data: null,
      error: null,
    });
    getPlan(slug)
      .then(plan => {
        setPlans({
          loading: false,
          data: plan.data,
          error: null,
        });
      })
      .catch(err => {
        console.log(err.message);
        setPlans({
          data: null,
          loading: false,
          error: err.message,
        });
      });
  };

  if (plans.loading) {
    content = (
      <div>
        <Typography>Loading ...</Typography>
      </div>
    );
  }

  if (plans.error) {
    content = (
      <div>
        <Typography>There is a {plans.error}</Typography>
      </div>
    );
  }

  if (plans.data) {
    content = <PlanDetails plan={plans.data} />;
  }

  return <RootStyle>{content}</RootStyle>;
};

SinglePlan.propTypes = {
  className: PropTypes.string,
};

export default SinglePlan;
