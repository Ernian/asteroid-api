import { ReactNode, useReducer } from 'react'
import { AppContext } from '../../context'
import { initialState, reducer } from '../../context'

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider