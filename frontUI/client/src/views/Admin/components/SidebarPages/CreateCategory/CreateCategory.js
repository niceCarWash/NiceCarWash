import React, { useState } from 'react';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { createCategory } from 'redux/actions/CategoryActions';
import { useSelector } from 'react-redux';
import { useStyles } from './Style';
import CategoryForm from '../Categories/CategoryForm';

const CreateCategory = props => {
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();
  const { auth } = useSelector(state => ({ ...state }));
  let name = '';
  const history = useHistory();
  const CategoryFormHandler = async values => {
    const { name } = values;
    setLoading(true);

    createCategory(name, auth.token)
      .then(res => {
        console.log(res);
        setMessage(`New category was created with name ${res.data.name}`);
        setLoading(false);
        history.push('/admin/?pid=all_categories');
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
        title="Create Category"
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
        Loading={Loading}
        name={name}
        CategoryFormHandler={CategoryFormHandler}
      ></CategoryForm>
    </div>
  );
};

export default CreateCategory;
