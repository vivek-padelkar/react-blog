import { useContext, useRef } from 'react'
import axios from 'axios'
import { Context } from '../../context/context'
import { loginContants } from '../../context/constants'
import {
  Container,
  LoginForm,
  Label,
  TextInput,
  LoginButton,
  RegisterButton,
  LoginTitle,
  RegisterWrapper,
  RegistertTitle,
  StyledLink,
  StyledCircularProgress,
} from './login.style'
import Message from '../../components/Message/message.component'
import CircularProgress from '@mui/material/CircularProgress'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFeatching, error } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: loginContants.LOGIN_START })

    try {
      const { data } = await axios.post('/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })

      dispatch({ type: loginContants.LOGIN_SUCCESS, payload: data })
    } catch (err) {
      dispatch({
        type: loginContants.LOGIN_FAIL,
        payload: err.response.data.message,
      })
    }
  }

  return (
    <Container>
      {error && <Message messageType={'error'}>{error}</Message>}
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <Label>Username</Label>
        <TextInput type="text" placeholder="Username" ref={userRef} required />

        <Label>Password</Label>
        <TextInput
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />

        <LoginButton type="submit">
          {!isFeatching ? 'Login' : <StyledCircularProgress size={19} />}
        </LoginButton>
      </LoginForm>

      <RegisterWrapper>
        <RegistertTitle>New to Bloggspot ?</RegistertTitle>
        <StyledLink to="/register">
          <RegisterButton>Register</RegisterButton>
        </StyledLink>
      </RegisterWrapper>
    </Container>
  )
}

export default Login
