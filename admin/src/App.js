// in src/App.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PlanList, PlanEdit, PlanCreate, PlanShow } from './components/Plans';
import {
  ServiceCreate,
  ServiceEdit,
  ServiceShow,
  ServicesList,
} from './components/Services';
import dataProvider from './dataProvider';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="plans"
      list={PlanList}
      create={PlanCreate}
      edit={PlanEdit}
      show={PlanShow}
    />
    <Resource
      name="services"
      list={ServicesList}
      create={ServiceCreate}
      edit={ServiceEdit}
      show={ServiceShow}
    />
  </Admin>
);

export default App;
