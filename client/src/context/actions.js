import { loginContants } from '../context/constants'

export const loginStart = (userCredentials) => ({
  type: loginContants.LOGIN_START,
})

export const loginSuccess = (user) => ({
  type: loginContants.LOGIN_SUCCESS,
  payload: user,
})

export const loginFail = (error) => ({
  type: loginContants.LOGIN_FAIL,
  payload: error,
})

export const logout = () => ({
  type: loginContants.LOGOUT,
})
