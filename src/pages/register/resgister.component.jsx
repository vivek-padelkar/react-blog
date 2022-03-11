import {
  Container,
  RegisterForm,
  Label,
  TextInput,
  RegisterButton,
  RegisterTitle,
} from './register.style'

const Register = () => {
  return (
    <Container>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm>
        <Label>Username</Label>
        <TextInput type="email" placeholder="Email" />
        <Label>Email</Label>
        <TextInput type="email" placeholder="Email" />
        <Label>Password</Label>
        <TextInput type="password" placeholder="Password" />
        <Label>Confirm Password</Label>
        <TextInput type="password" placeholder="Password" />

        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </Container>
  )
}

export default Register
