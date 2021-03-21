import React from 'react';
export const subPages = [
  {
    id: 'services',
    href: '/admin/?pid=services',
    title: 'Services',
    icon: <i className="far fa-concierge-bell"></i>,
  },
  {
    id: 'subscriptions',
    href: '/admin/?pid=subscriptions',
    title: 'Subscriptions',
    icon: <i className="fas fa-user"></i>,
  },
  {
    id: 'users',
    href: '/admin/?pid=users',
    title: 'Users',
    icon: <i className="fas fa-users"></i>,
  },
  {
    id: 'insights',
    href: '/admin/?pid=insights',
    title: 'Insights',
    icon: <i className="fas fa-search"></i>,
  },
  {
    id: 'invoices',
    href: '/admin/?pid=invoices',
    title: 'Invoices',
    icon: <i className="fas fa-file-invoice-dollar"></i>,
  },
  {
    id: 'reviews',
    href: '/admin/?pid=reviews',
    title: 'Reviews',
    icon: <i className="fas fa-file-pdf"></i>,
  },
];
