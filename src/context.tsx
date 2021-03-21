import { createContext, useContext } from 'react'

export const AppContext = createContext<any>({})

export const useApp = () => useContext<any>(AppContext)
