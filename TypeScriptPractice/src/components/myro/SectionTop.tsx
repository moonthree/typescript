import React from 'react';

export default function SectionTop() {
  return (
    <div className="grid min-h-screen grid-cols-3">
      <div className="flex flex-col items-center justify-center col-span-1 space-y-10">
        <div className="text-2xl font-bold">AI 여행 스케줄링 플래너</div>
        <div className="font-extrabold text-7xl">야 여기 어때 놀자</div>
        <button
          type="button"
          className="py-5 text-2xl font-bold text-white bg-red-400 rounded px-28"
        >
          시작하기
        </button>
      </div>
      <div className="col-span-2 max-xl:hidden">
        <video muted autoPlay loop className="object-cover w-full h-full">
          <source src="./main.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
