import React from 'react';
import {
  Typography,
  List,
  ListItem,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@material-ui/core';
import Loading from 'views/Loading/Loading';
import { Section } from 'components/organisms';
import { useAxiosGet } from 'hooks/useGetPlan';
import { removeCategory } from 'redux/actions/CategoryActions';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Categories = props => {
  const url = `${process.env.REACT_APP_API}/categories`;
  let plans = useAxiosGet(url);
  const { auth } = useSelector(state => ({ ...state }));
  let content = null;

  const handleCategoryDelete = slug => {
    if (
      window.confirm(
        'Are you sure you want to delete this category, ALL PLANS RELATED TO THIS CATEGORY WILL BE DELETED ALSO ',
      )
    ) {
      removeCategory(slug, auth.token)
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
        <Typography>There is an error in loading the categories</Typography>
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
            to={`/admin/categories/${plan.slug}`}
            style={{ color: 'orange' }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleCategoryDelete(plan.slug)}
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

export default Categories;
