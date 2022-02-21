import * as React from 'react';
import Home from './pages/Home';
import About from './pages/About';

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