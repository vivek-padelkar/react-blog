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
} from './login.style'

const Login = () => {
  return (
    <Container>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <Label>Email</Label>
        <TextInput type="email" placeholder="Email" />
        <Label>Password</Label>
        <TextInput type="password" placeholder="Password" />

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>

      <RegisterWrapper>
        <RegistertTitle>New to Bloggspot ?</RegistertTitle>
        <RegisterButton>Register</RegisterButton>
      </RegisterWrapper>
    </Container>
  )
}

export default Login
