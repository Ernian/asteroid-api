import { IAction, IInitialState } from '@/types'

export const reducer = (state: IInitialState, { type, payload }: IAction) => {
  switch (type) {
    case 'ADD_TO_ORDER':
      return {
        isKm: state.isKm,
        order: [...state.order, payload]
      }
      break
    case 'REMOVE_FROM_ORDER':
      return {
        isKm: state.isKm,
        order: state.order.filter(asteroid => asteroid.id !== payload?.id)
      }
      break
    case 'SET_IS_KM':
      return { ...state, isKm: !state.isKm }
      break
    case 'CLEAR_ORDER':
      return { isKm: state.isKm, order: [] }
      break
    default: return state
  }
}

export const initialState: IInitialState = { isKm: false, order: [] }