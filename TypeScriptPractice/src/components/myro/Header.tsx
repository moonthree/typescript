import React from 'react';

export default function Header() {
  return (
    <div className="fixed left-0 right-0 flex justify-between mx-10">
      <div className="space-x-7">
        <span className="font-sans text-3xl font-extrabold">야 여기어때 놀자</span>
        <span>MAKE YOUR ROUTE OPTIMIZED</span>
      </div>
      <div className="space-x-5 text-xl font-extrabold text-white">
        <span>여행지</span>
        <span>마이로</span>
        <span>이용방법</span>
        <span>로그인</span>
      </div>
    </div>
  );
}
