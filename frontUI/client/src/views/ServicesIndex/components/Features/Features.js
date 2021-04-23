import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography, colors, Divider } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  learnMoreLink: {
    marginTop: theme.spacing(2),
  },
  typography: {
    fontSize: 10,
  },
}));

const Features = props => {
  const { className, ...rest } = props;

  const { servicesList, auth } = useSelector(state => ({ ...state }));

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            En biltvätttjänst som{' '}
            <Typography color="secondary" variant="inherit" component="span">
              fungerar för dig
            </Typography>
          </span>
        }
        subtitle="Kunder från hela Sverige har haft fantastiska upplevelser med Nice Car Wash."
        fadeUp
      />
      <Grid container spacing={2}>
        {servicesList.data.map(service => (
          <Grid
            key={service._id}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined" align="left">
              <DescriptionListIcon
                title={service.service}
                icon={
                  <IconAlternate
                    fontIconClass="fas fa-tools"
                    size="medium"
                    color={colors.blue}
                  />
                }
                align="left"
              />
              <Typography color="primary" variant="h4" component="h1">
                {service.price}KR
              </Typography>
              <div style={{ flexGrow: 1 }} />
              <Grid item xs={12} md={12}>
                <Button
                  title="Learn more"
                  variant="outlined"
                  component={Link}
                  to="/service_order"
                  color="secondary"
                >
                  Order Service
                </Button>
              </Grid>
            </CardBase>
          </Grid>
        ))}
        {/* {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined" align="left">
              <DescriptionListIcon
                title={item.title}
                subtitle={item.description}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.blue}
                  />
                }
                align="left"
              />
              <div style={{ flexGrow: 1 }} />
              <Button
                title="Learn more"
                variant="outlined"
                component={Link}
                to="/service_order"
                color="secondary"
              >
                Order Service
              </Button>
            </CardBase>
          </Grid>
        ))} */}
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Features;
