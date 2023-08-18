'use client'

import { createContext, useState, Dispatch, SetStateAction } from "react"

type CountType = {
  count: number,
  setCount: Dispatch<SetStateAction<number>>
}

export const CountContext = createContext<CountType>({
  count: 0,
  setCount: () => {},
})

export default function CountProvider({ children }: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  const value = {
    count,
    setCount,
  }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}