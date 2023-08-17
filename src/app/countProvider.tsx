'use client'

import { createContext, useState } from "react"

type CountType = {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
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