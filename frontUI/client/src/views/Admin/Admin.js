import React, { useState } from 'react';

import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';
import { AdminSideBar } from './components';

const Admin = props => {
  const AdminPage = {
    planPages: {
      title: 'Plans',
      id: 'planPages',
      children: {
        page: [
          {
            title: 'All Plans',
            id: 'all_plans',
            to: '/admin/?pid=all_plans',
            icon: <ListIcon />,
          },
          {
            title: 'Create Plan',
            id: 'create_plans',
            to: '/admin/?pid=create_plan',
            icon: <CreateIcon />,
          },
        ],
      },
    },
    categoryPages: {
      title: 'Category',
      id: 'categoryPages',
      children: {
        page: [
          {
            title: 'All Categories',
            id: 'all_categories',
            to: '/admin/?pid=all_categories',
            icon: <ListIcon />,
          },
          {
            title: 'Create Category',
            id: 'create_category',
            to: '/admin/?pid=create_category',
            icon: <CreateIcon />,
          },
        ],
      },
    },
    featuresPages: {
      title: 'Features',
      id: 'featuresPages',
      children: {
        page: [
          {
            title: 'All Features',
            id: 'all_features',
            to: '/admin/?pid=all_features',
            icon: <ListIcon />,
          },
          {
            title: 'Create Feature',
            id: 'create_category',
            to: '/admin/?pid=create_feature',
            icon: <CreateIcon />,
          },
        ],
      },
    },
  };

  return <AdminSideBar pages={AdminPage} />;
};

export default Admin;
