import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="text-center h-14 border-b-2 border-black flex justify-center items-center">
        <Link to={'/'} className="font-bold">
          home
        </Link>
        <Link to={'/map'} className="font-bold">
          map
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
