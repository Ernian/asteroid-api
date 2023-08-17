import { IAction, IAsteroidInfo, IInitialState } from '@/types'
import { createContext, Dispatch } from 'react'

export const AppContext = createContext<[IInitialState, Dispatch<IAction>]>([{} as IInitialState, () => { }])
