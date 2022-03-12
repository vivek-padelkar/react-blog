import styled from 'styled-components'

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
