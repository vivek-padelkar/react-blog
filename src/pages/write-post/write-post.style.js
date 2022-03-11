import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 50px;
`
export const FormWrite = styled.form``

export const WriteFormGroup = styled.div`
  position: relative;
  margin-left: 150px;
`
export const FileInput = styled.input``

export const TextInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
  :focus {
    outline: none;
  }
`
export const BrowseLabel = styled.label`
  display: inline-block;
`

export const FileIcon = styled.i`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const WriteText = styled.textarea`
  font-size: 20px;
  border: none;
  padding: 20px;
  width: 70vw;
  height: 50vh;
`
export const WriteSubmit = styled.button`
  position: absolute;
  top: 0;
  right: 300px;
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`
export const WriteImage = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`
