import React, { useState } from 'react';

//TEST CODE OF Calculator
// const calc = (command: Command, a: number, b: number): number => {
//   switch (command) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '/':
//       return a / b;
//     case '%':
//       return a % b;
//     default:
//       return 0;
//   }
// };

export default function Caclulator() {
  type Command = '+' | '-' | '*' | '/' | '%' | string;
  const [result, setResult] = useState(0);
  const [commandd, setCommand] = useState('');
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };
  const handleA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(e.target.value));
  };
  const handleB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value));
  };
  const calc = (command: Command, a: number, b: number): number => {
    switch (command) {
      case '+':
        setResult(a + b);
        return a + b;
      case '-':
        setResult(a - b);
        return a - b;
      case '*':
        setResult(a * b);
        return a * b;
      case '/':
        setResult(a / b);
        return a / b;
      case '%':
        setResult(a % b);
        return a % b;
      default:
        setResult(0);
        return 0;
    }
  };
  return (
    <div className="mt-10 mx-10">
      <input type="text" onChange={handleChange} className="border-2" />
      <input type="number" onChange={handleA} className="border-2" />
      <input type="number" onChange={handleB} className="border-2" />
      <button
        type="button"
        onClick={() => {
          calc(commandd, A, B);
        }}
      >
        계산
      </button>
      <div className="">결과 : {result}</div>
    </div>
  );
}
