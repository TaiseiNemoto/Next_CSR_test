'use client';

import { useContext } from "react";
import { CountContext } from "../countProvider";

const CountDisplay = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <p>Count: {count}</p>
    </>
  )
}

export default CountDisplay