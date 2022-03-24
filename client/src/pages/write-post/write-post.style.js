import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: inherit;
`
export const Container = styled.div`
  padding-top: 50px;
`
export const FormWrite = styled.form``

export const WriteFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FileInput = styled.input``

export const TextInput = styled.input`
  margin-top: 20px;
  font-size: ${(props) => (props.ishasHtag ? '20px' : '30px')};
  border: none;
  padding: 10px;
  width: 70vw;
  /* :focus {
    outline: none;
  } */
`
export const BrowseLabel = styled.label`
  margin-top: 20px;
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
  margin-top: 20px;
  font-size: 20px;
  border: none;
  padding: 10px;
  width: 70%;
  height: 40vh;
`
export const WriteSubmit = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 400px;
  margin-top: 20px;
`
export const WriteImage = styled.img`
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`
