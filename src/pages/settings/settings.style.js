import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const SettingsWrapper = styled.div`
  flex: 9;
  padding: 20px;
`
export const SettingsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SettingsUpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
`
export const SettingsDeleteTitle = styled.span`
  color: tomato;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  color: red;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: red;
    color: white;
  }
`
export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const PPLabel = styled.label``
export const SttingsPP = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
export const PPImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  object-fit: cover;
`
export const PPUserIcon = styled.i`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  background-color: black;
  color: white;
`
export const Label = styled.label`
  font-size: 20px;
  margin-top: 20px;
`
export const TextInput = styled.input`
  color: gray;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid lightgray;
  height: 25px;
  font-size: 15px;
  :focus {
    outline: none;
  }
`
export const SettingsSubmit = styled.button`
  margin-top: 10px;
  border: none;
  align-self: center;
  width: 250px;
  background-color: teal;
  color: white;
  padding: 15px;
  transition: all 0.1s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #6ed0bf;
    color: black;
    font-weight: bolder;
  }
`
