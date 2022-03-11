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
  transition: all 0.2ms ease-in-out;
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
`
export const PPImage = styled.img``
export const PPUserIcon = styled.i``
export const Label = styled.label``
export const TextInput = styled.input``
export const SettingsSubmit = styled.button``
