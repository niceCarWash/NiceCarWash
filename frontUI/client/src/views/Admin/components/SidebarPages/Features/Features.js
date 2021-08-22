import React from 'react';
import { Typography, List, ListItem, Grid, Button } from '@material-ui/core';
import Loading from 'views/Loading/Loading';
import { Section } from 'components/organisms';
import { useAxiosGet } from 'hooks/useGetPlan';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { removeFeature } from 'redux/actions/FeatureActions';
const Features = props => {
  const url = `${process.env.REACT_APP_API}/features`;
  let plans = useAxiosGet(url);
  const { auth } = useSelector(state => ({ ...state }));
  let content = null;
  const handleFeatureDelete = slug => {
    if (window.confirm('Delete?')) {
      removeFeature(slug, auth.token)
        .then(res => {
          console.log(res.name, 'is deleted');
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  if (plans.error) {
    content = (
      <Section>
        <Typography>There is an error in loading the Features</Typography>
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
      <Grid container key={plan._id}>
        <List>
          <Grid item sm={12} lg={12}>
            <ListItem style={{ backgroundColor: 'lightgray' }}>
              {plan.name}
            </ListItem>
          </Grid>
          <Button
            component={Link}
            to={`/admin/features/${plan.slug}`}
            style={{ color: 'orange' }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleFeatureDelete(plan.slug)}
            style={{ color: 'red' }}
          >
            Delete
          </Button>
        </List>
      </Grid>
    ));
  }
  return <div>{content}</div>;
};

export default Features;
