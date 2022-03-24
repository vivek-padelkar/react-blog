import { loginContants } from './constants'

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case loginContants.LOGIN_START:
      return {
        ...state,
        isFeatching: true,
      }
    case loginContants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFeatching: false,
        error: null,
      }
    case loginContants.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isFeatching: false,
        error: action.payload,
      }
    case loginContants.LOGOUT:
      return {
        ...state,
        user: null,
        isFeatching: false,
        error: null,
      }
    default:
      return state
  }
}
