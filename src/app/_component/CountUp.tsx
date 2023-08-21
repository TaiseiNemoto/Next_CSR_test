'use client';

import { useContext } from "react";
import { CountContext } from "../countProvider";

const CountUp = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button className="font-zenkaku" onClick={() => setCount(num => num + 1)}>カウントアップ</button>
      </div>
    </>
  )
}

export default CountUp