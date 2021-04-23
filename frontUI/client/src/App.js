/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

import { listServices } from 'redux/actions/services_actions/serviceAction';
import { listPlans } from 'redux/actions/plan-actions/planActions';

import { useDispatch } from 'react-redux';

const browserHistory = createBrowserHistory();

const App = () => {
  // Serivces Loading
  let dispatch = useDispatch();

  const loadServices = () => {
    listServices().then(services => {
      dispatch({
        type: 'SERVICE_LIST',
        payload: services,
      });
    });
  };

  //Plans Load
  const loadPlans = () => {
    listPlans().then(plans => {
      dispatch({
        type: 'PLANS_LIST',
        payload: plans,
      });
    });
  };

  useEffect(() => {
    loadServices();
    loadPlans();
    console.log('Data loading done!');
  }, []);

  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
};

export default App;
