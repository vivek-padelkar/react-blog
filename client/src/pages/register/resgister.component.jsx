import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
  Container,
  RegisterForm,
  Label,
  TextInput,
  RegisterButton,
  RegisterTitle,
  LoginButton,
  StyledLink,
  RegisterWrapper,
  RegistertTitle,
} from './register.style'

const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return toast.error('Password and Confirm password should be same !')
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const reqData = {
        username,
        email,
        password,
      }
      try {
        const { data } = await axios.post('/api/auth/register', reqData, config)
        data && window.location.replace('/login')
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
      }
    }
  }

  return (
    <Container>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Label>Username</Label>
        <TextInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Label>Email</Label>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label>Password</Label>
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Label>Confirm password</Label>
        <TextInput
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <RegisterButton type="submit">Register</RegisterButton>

        <RegisterWrapper>
          <RegistertTitle>Login to Bloggspot</RegistertTitle>
          <StyledLink to="/login">
            <LoginButton>Login</LoginButton>
          </StyledLink>
        </RegisterWrapper>
      </RegisterForm>
    </Container>
  )
}

export default Register
