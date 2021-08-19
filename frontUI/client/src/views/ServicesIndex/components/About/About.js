import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Link } from 'react-router-dom';

const About = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 0}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    få en hög kvalitet{' '}
                    <Typography
                      component="span"
                      variant="inherit"
                      color="primary"
                    >
                      biltvätt
                    </Typography>{' '}
                    med Nice Car Wash
                  </span>
                }
                subtitle="Vi hjälper dig att rengöra, reparera och underhålla din bil."
                ctaGroup={[
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    component={Link}
                    to="/plans"
                  >
                    beställ vår tjänst nu!
                  </Button>,
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://res.cloudinary.com/imran6099/image/upload/v1628795478/MTPK2_VW_34FR_watch-44-alum-silver-nc-se_VW_34FR_WF_CO_zxthqg.jpg"
            alt="Dashboard"
          />
        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
