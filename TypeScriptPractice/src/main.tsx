import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Caclulator from './pages/Caclulator';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: 'calculator',
        element: <Caclulator />,
      },
    ],
  },
]);

ReactDOM.render(
  <>
    <RouterProvider router={router} />
  </>,
  document.getElementById('root'),
);
