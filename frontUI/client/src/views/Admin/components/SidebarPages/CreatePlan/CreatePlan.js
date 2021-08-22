import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { Section } from 'components/organisms';
import { SectionAlternate, CardBase } from 'components/organisms';
import { useStyles } from './Style';
import { createPlan } from 'redux/actions/plan-actions/planActions';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PlanForm from './PlanForm';
const CreatePlan = props => {
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();
  const { auth } = useSelector(state => ({ ...state }));
  const history = useHistory();

  const handlePlanForm = async values => {
    console.log(values);
  };

  let title = '';
  let category = '';
  let features = [];
  let price = '';
  let time = '';
  let image = '';
  const classes = useStyles();
  return (
    <div>
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Section>
            {Message && (
              <Section>
                <Alert severity="success">{Message}</Alert>
              </Section>
            )}
            {ErrorMessage && (
              <Section>
                <Alert severity="error">{ErrorMessage}</Alert>
              </Section>
            )}
          </Section>
          <Grid item xs={12} md={8}>
            <CardBase withShadow align="right">
              <PlanForm
                handlePlanForm={handlePlanForm}
                Loading={Loading}
                title={title}
                category={category}
                features={features}
                price={price}
                time={time}
                image={image}
              />
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default CreatePlan;
