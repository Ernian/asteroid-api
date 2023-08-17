import { ActionType, IAsteroidInfo } from '@/types'

const ADD_TO_ORDER: ActionType = 'ADD_TO_ORDER'
const REMOVE_FROM_ORDER: ActionType = 'REMOVE_FROM_ORDER'
const SET_IS_KM: ActionType = 'SET_IS_KM'
const CLEAR_ORDER: ActionType = 'CLEAR_ORDER'


export const addToOrder = (payload: IAsteroidInfo) => ({
  type: ADD_TO_ORDER,
  payload
})

export const removeFromOrder = (payload: IAsteroidInfo) => ({
  type: REMOVE_FROM_ORDER,
  payload
})

export const setIsKm = () => ({ type: SET_IS_KM })
export const clearOrder = () => ({ type: CLEAR_ORDER })
