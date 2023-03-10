import React from 'react';

export default function SectionBottom() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl">
      <div className="text-3xl font-bold text-center">어디로 여행을 떠나시나요?</div>
      <div className="flex justify-around">
        <div className="max-w-[250px] max-h-[500px] shadow-xl">
          <div className="w-full h-full">
            <img src="./jeju.jpg" alt="" className="hover:scale-110" />
            <div className="m-5">
              <div className="">JEJU</div>
              <div className="">대한민국 제주도</div>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] max-h-[500px] shadow-xl overflow-hidden">
          <div className="w-full h-full">
            <img src="./jeju.jpg" alt="" className="hover:scale-110" />
            <div className="m-5">
              <div className="">JEJU</div>
              <div className="">대한민국 제주도</div>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] max-h-[500px] shadow-xl">
          <div className="w-full h-full">
            <img src="./jeju.jpg" alt="" className="hover:scale-110" />
            <div className="m-5">
              <div className="">JEJU</div>
              <div className="">대한민국 제주도</div>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] max-h-[500px] shadow-xl">
          <div className="w-full h-full">
            <img src="./jeju.jpg" alt="" className="hover:scale-110" />
            <div className="m-5">
              <div className="">JEJU</div>
              <div className="">대한민국 제주도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
