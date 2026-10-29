import { createContext, useContext } from 'react'

export const ScrollProgressContext = createContext(0)

export const useScrollProgress = () => useContext(ScrollProgressContext)
