import { createContext, useEffect, useReducer } from 'react'
import { LoginReducer } from './reducers'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('userInfo')) || null,
  isFeatching: false,
  error: null,
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE)
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFeatching: state.isFeatching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
