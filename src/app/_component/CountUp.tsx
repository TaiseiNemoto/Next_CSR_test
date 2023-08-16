'use client';

import { useContext } from "react";
import { CountContext } from "../countProvider";

type CountType = {
  count: number,
  setCount: (value: number) => void
}

const CountUp = () => {
  const { count, setCount } = useContext(CountContext)

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      </div>
    </>
  )
}

export default CountUp