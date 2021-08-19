import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './Style';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section, CardPricingStandard } from 'components/organisms';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = props => {
  const { data, className, ...rest } = props;
  const { plans } = useSelector(state => ({ ...state }));
  console.log(plans)
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow className={classes.pagePaddingTop}>
          <>
            <SectionHeader
              title="Our Plans"
              subtitle="Våra planer är billiga och mycket lönsamma"
              titleProps={{
                className: clsx(classes.textWhite, classes.fontWeightBold),
                variant: 'h2',
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
              data-aos="fade-up"
            />
          </>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        <div>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {plans.data.map(plan => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={plan._id}>
                  <CardPricingStandard
                    variant="outlined"
                    title={plan.planTitle}
                    liftUp
                    priceComponent={
                      <Typography variant="h3" color="textPrimary">
                        {plan.planPrice} KR
                      </Typography>
                    }
                    features={
                      plan.planFeatures.map(feature => {
                        const arrayFeature = [feature]
                        return (
                          <Typography>{arrayFeature}</Typography>
                        )
                      })
                    }
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={theme.palette.primary.main}
                      />
                    }
                    cta={
                      <Button
                        color="primary"
                        fullWidth
                        size="large"
                        component={Link}
                        to="/service_order"
                      >
                        Order Now
                      </Button>
                    }
                    className={classes.cardPricing}
                  />
                  
                </Grid>
                
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */

};

export default Main;
