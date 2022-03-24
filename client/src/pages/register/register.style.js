import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: inherit;
`
export const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.15)
    ),
    url('/assets/register.jpg');

  background-size: cover;
`
export const RegisterTitle = styled.span`
  font-size: 50px;
  font-family: 'Lora', sans-serif;
  position: absolute;
  top: 150px;
`
export const RegisterForm = styled.form`
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 210px;
`
export const Label = styled.label`
  margin: 15px 0;
`
export const TextInput = styled.input`
  padding: 10px;
  border: none;
  width: 400px;
  //border-bottom: 1px solid;
`

export const RegisterButton = styled.button`
  margin-top: 25px;
  padding: 10px;
  cursor: pointer;
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  width: 400px;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: #7f7f7f;
    color: white;
  }
`

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bolder;
  width: 100%;
  justify-content: center;
`
export const LoginButton = styled.button`
  margin-top: 8px;
  padding: 10px;
  cursor: pointer;
  background-color: tomato;
  border: none;
  color: white;
  border-radius: 10px;
  :hover {
    background-color: #ea8e7d;
  }
  width: 100%;
  display: block;
`

export const RegistertTitle = styled.span`
  font-family: 'Lora', sans-serif;
  margin-top: 15px;
  text-align: center;
`
