import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './Style';
import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

import { SectionHeader } from 'components/molecules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PlanCard = props => {
  const { data, className, plan, ...rest } = props;
  const classes = useStyles();

  const { auth } = useSelector(state => ({ ...state }));

  return (
    <div className={className} {...rest}>
      <SectionHeader title="All Plans" data-aos="fade-up" align="left" />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          data-aos="fade-up"
          className={classes.gridItem}
        >
          <Card
            className={clsx(classes.card, 'latest-products__card')}
            variant="outlined"
          >
            <CardMedia
              className={clsx(classes.cardMedia, 'latest-products__card-media')}
              image={plan.image}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={classes.fontWeightBold}
              >
                {plan.title}
              </Typography>
              {plan.features.map(feature => (
                <Typography
                  color="primary"
                  key={feature._id}
                  variant="subtitle2"
                  className={classes.fontWeightBold}
                >
                  * {feature.name}
                </Typography>
              ))}
              <div className={classes.priceCta}>
                <Typography
                  color="primary"
                  variant="h6"
                  className={classes.fontWeightBold}
                >
                  {plan.price} kr
                </Typography>
                <Typography
                  color="secondary"
                  variant="h6"
                  className={classes.fontWeightBold}
                >
                  {plan.time}h
                </Typography>
              </div>
              {/* <div className={classes.priceCta}>
                <Rating name="read-only" value={value} readOnly />
              </div> */}

              <div style={{ flexGrow: 1 }} />
              {auth && auth.role === 'admin' ? (
                <div>
                  <Grid container>
                    <Grid item sm={6}>
                      <Button
                        variant="contained"
                        component={Link}
                        to={`/plans/plan/${plan.slug}`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item sm={6}>
                      <Button
                        variant="outlined"
                        style={{ color: 'red' }}
                        component={Link}
                        to={`/plans/plan/${plan.slug}`}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <Button component={Link} to={`/plans/plan/${plan.slug}`}>
                  Learn more
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

PlanCard.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  plan: PropTypes.object.isRequired,
};

export default PlanCard;
