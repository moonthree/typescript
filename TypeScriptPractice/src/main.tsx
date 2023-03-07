import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Caclulator from './pages/Caclulator';
import Doit from './pages/Doit';
import Home from './pages/Home';
import Map from './pages/Map';

// createBrowerRouter() 함수를 사용하여 라우터를 생성합니다.
// 라우터는 라우트의 배열을 인자로 받습니다.
// 라우트는 path, element, children 프로퍼티를 가집니다.
// path는 라우트의 경로를 나타냅니다.
// element는 라우트의 컴포넌트를 나타냅니다.
// children은 라우트의 자식 라우트를 나타냅니다.
// index 프로퍼티를 true로 설정하면 해당 라우트가 기본 라우트가 됩니다.

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
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'doit',
        element: <Doit />,
      },
    ],
  },
]);

// ReactDOM.render() 함수를 사용하여 라우터를 렌더링합니다.
// 라우터는 RouterProvider 컴포넌트의 router 프로퍼티를 사용하여 전달합니다.
// RouterProvider 컴포넌트는 라우터의 상태를 관리하는 컴포넌트입니다.
// 라우터의 상태는 라우터의 경로, 라우터의 매칭된 라우트, 라우터의 매칭된 라우트의 매개변수 등을 포함합니다.

ReactDOM.render(
  <>
    <RouterProvider router={router} />
  </>,
  document.getElementById('root'),
);
