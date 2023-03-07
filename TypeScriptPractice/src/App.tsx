import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-5 text-center border-b-2 border-black h-14">
        <Link to={'/'} className="font-bold">
          home
        </Link>
        <Link to={'/map'} className="font-bold">
          map
        </Link>
        <Link to={'/doit'} className="font-bold">
          Doit
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
