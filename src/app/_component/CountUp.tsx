'use client';

import { useContext } from "react";
import { CountContext } from "../countProvider";

const CountUp = () => {
  const { setCount } = useContext(CountContext);

  return (
    <>
      <div>
        <button className="font-zenkaku" onClick={() => setCount(num => num + 1)}>カウントアップ</button>
      </div>
    </>
  )
}

export default CountUp