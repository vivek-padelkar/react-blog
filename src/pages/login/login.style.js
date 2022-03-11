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
    //background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url('/assets/login.jpg');

  background-size: cover;
`
export const LoginTitle = styled.span`
  font-size: 50px;
  font-family: 'Lora', sans-serif;
  position: absolute;
  top: 150px;
`
export const LoginForm = styled.div`
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
export const LoginButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  background-color: tomato;
  border: none;
  color: white;
  border-radius: 10px;
  :hover {
    background-color: #ea8e7d;
  }
`

export const RegisterWrapper = styled.div`
  top: 450px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: bolder;
`
export const RegistertTitle = styled.span`
  font-family: 'Lora', sans-serif;
  margin-top: 15px;
`
export const RegisterButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  cursor: pointer;
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  width: 400px;
  :hover {
    background-color: #7f7f7f;
    color: white;
  }
`
