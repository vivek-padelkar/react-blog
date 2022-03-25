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

export const updateStart = (userCredentials) => ({
  type: loginContants.UPDATE_START,
})

export const updateSuccess = (user) => ({
  type: loginContants.UPDATE_SUCCESS,
  payload: user,
})

export const updateFail = (error) => ({
  type: loginContants.UPDATE_FAIL,
  payload: error,
})
