import React from 'react';

interface Item {
  img: string;
  title: string;
  desc: string;
}

const arr: Item[] = [
  { img: './jeju.jpg', title: 'JEJU', desc: '대한민국 제주도' },
  { img: './jeju.jpg', title: 'JEJU', desc: '대한민국 제주도' },
  { img: './jeju.jpg', title: 'JEJU', desc: '대한민국 제주도' },
  { img: './jeju.jpg', title: 'JEJU', desc: '대한민국 제주도' },
];

export default function SectionBottom() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl">
      <div className="text-3xl font-bold text-center">어디로 여행을 떠나시나요?</div>
      <div className="flex justify-around">
        {arr.map((item: Item, index: number) => (
          <div
            key={index}
            className="max-w-[250px] max-h-[500px] shadow-xl hover:cursor-pointer"
          >
            <div className="w-full h-full">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="transition-all duration-300 hover:scale-125"
                />
              </div>
              <div className="m-5">
                <div className="">{item.title}</div>
                <div className="">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
