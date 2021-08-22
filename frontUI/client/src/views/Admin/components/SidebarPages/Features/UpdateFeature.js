import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { getFeature, updateFeature } from 'redux/actions/FeatureActions';
import { useSelector } from 'react-redux';
import FeatureForm from '../Features/FeaturesForm';
import { useStyles } from './Style';
import LoadingPage from 'views/Loading/Loading';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { featuredProducts } from 'views/ServicesIndex/data';
const UpdateFeature = ({ match }) => {
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
    loadFeature(slug);
  }, [slug]);

  let content = null;

  const featureFormHandler = async values => {
    const { name } = values;
    setLoading(true);

    updateFeature(slug, name, auth.token)
      .then(res => {
        setMessage(`Feature was updated ${res.data.name}`);
        setLoading(false);
        history.push('/admin/?pid=all_features');
      })
      .catch(err => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  };

  const loadFeature = slug => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    getFeature(slug)
      .then(res => {
        {
          setRequest({
            loading: false,
            data: res.data.SingleFeature.name,
            error: false,
          });
        }
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
    console.log(request.error);
    content = (
      <Section>
        <Typography>There is an error in loading the feature</Typography>
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
          title="Update Feature"
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
        <FeatureForm
          name={request.data}
          Loading={Loading}
          featureFormHandler={featureFormHandler}
        ></FeatureForm>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default UpdateFeature;
