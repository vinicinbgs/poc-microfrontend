import React from 'react';
import Home from './pages/home';
import About from './pages/about';

const routes = [
  {
    path: '/about',
    component: <About />
  },
  {
    path: '/',
    component: <Home />
  }
];

export default routes;