import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';

const Advantages = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            Nice Car Wash hjälper dig att få fina & rena bilar{' '}
            <Typography color="secondary" variant="inherit" component="span">
              Om du har tid ... har vi glansen!
            </Typography>
          </span>
        }
        subtitle="bra service till rimliga priser"
        fadeUp
      />
      <Grid container spacing={isLg ? 10 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined">
              <Image src={item.img} alt={item.title} />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;
