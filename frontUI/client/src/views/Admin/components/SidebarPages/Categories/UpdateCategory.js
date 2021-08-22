import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { updateCategory, getCategory } from 'redux/actions/CategoryActions';
import { useSelector } from 'react-redux';
import { useAxiosGet } from 'hooks/useGetPlan';
import CategoryForm from '../Categories/CategoryForm';
import { useStyles } from './Style';
import LoadingPage from 'views/Loading/Loading';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
const UpdateCategory = ({ match }) => {
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const history = useHistory();
  const { auth } = useSelector(state => ({ ...state }));
  const { slug } = match.params;

  useEffect(() => {
    LoadCateogry(slug);
  }, [slug]);

  let content = null;

  const CategoryFormHandler = async values => {
    const { name } = values;
    setLoading(true);

    updateCategory(slug, name, auth.token)
      .then(res => {
        setMessage(`Category was updated ${res.data.name}`);
        setLoading(false);
        history.push('/admin/?pid=all_categories');
      })
      .catch(err => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  };

  const LoadCateogry = slug => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    getCategory(slug)
      .then(res => {
        setRequest({
          loading: false,
          data: res.data.category.name,
          error: false,
        });
      })
      .catch(err => {
        setRequest({
          loading: false,
          data: null,
          error: err.message,
        });
      });
  };
  const classes = useStyles();

  if (request.error) {
    content = (
      <Section>
        <Typography>There is an error in loading the categories</Typography>
      </Section>
    );
  }

  if (request.loading) {
    content = (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (request.data) {
    content = (
      <div>
        <SectionHeader
          title="Update Category"
          titleProps={{
            variant: 'h3',
          }}
        />
        <Section className={classes.pagePaddingTop}>
          {Message && (
            <Section className={classes.section}>
              <Alert severity="success">{Message}</Alert>
            </Section>
          )}
          {ErrorMessage && (
            <Section className={classes.section}>
              <Alert severity="error">{ErrorMessage}</Alert>
            </Section>
          )}
        </Section>
        <CategoryForm
          name={request.data}
          Loading={Loading}
          Message={Message}
          ErrorMessage={ErrorMessage}
          CategoryFormHandler={CategoryFormHandler}
        ></CategoryForm>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default UpdateCategory;
