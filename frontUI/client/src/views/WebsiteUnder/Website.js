import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Website = () => {
  const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(10),
    [theme.breakpoints.up(1368)]: {
      padding: theme.spacing(5, 8),
    },
  }));

  return (
    <RootStyle>
      <Grid container alignItems="center">
        <Grid item xs={12} lg={6}>
          <Typography variant="h4">
            Vår webbplats är för närvarande under underhåll, vi kommer att vara
            online snart, kontakta oss på vår epostadress:
            <Link
              to={{
                pathname:
                  'https://mail.google.com/mail/?view=cm&fs=1&to=info@nicecarwash.se.com&su=SUBJECT&body=BODY&bcc=info@nicecarwash.se',
              }}
              target="_blank"
            >
              &nbsp;Here
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default Website;
