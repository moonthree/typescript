import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="border-2 my-10 mx-20">
      <div className="grid grid-cols-2">
        <Link
          to={'/calculator'}
          className="border-4 text-center m-3 p-3 border-emerald-200 font-bold shadow-emerald-200 shadow-xl hover:cursor-pointer"
        >
          계산기
        </Link>
        <div className="border-4 text-center m-3 p-3 border-red-200 font-bold shadow-xl hover:cursor-pointer">
          ??
        </div>
      </div>
    </div>
  );
}
