import React, { useState } from 'react';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { createCategory } from 'redux/actions/CategoryActions';
import { useSelector } from 'react-redux';
import { useStyles } from './Style';
import FeatureForm from '../Features/FeaturesForm';
import { createFeature } from 'redux/actions/FeatureActions';
const CreateFeature = props => {
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();
  const { auth } = useSelector(state => ({ ...state }));
  let name = '';
  const history = useHistory();

  const featureFormHandler = values => {
    const { name } = values;
    setLoading(true);

    createFeature(name, auth.token)
      .then(res => {
        console.log(res);
        setMessage(`New feature was created with name ${res.data.name}`);
        setLoading(false);
        history.push('/admin/?pid=all_features');
      })
      .catch(err => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  };
  const classes = useStyles();

  return (
    <div>
      <SectionHeader
        title="Create Feature"
        titleProps={{
          variant: 'h3',
        }}
      />
      <Section className={classes.sectionNoPaddingTop}>
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
        Loading={Loading}
        name={name}
        featureFormHandler={featureFormHandler}
      ></FeatureForm>
    </div>
  );
};

export default CreateFeature;
