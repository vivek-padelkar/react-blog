import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: inherit;
`
export const Container = styled.div`
  flex: 9;
  margin-top: 20px;
`
export const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SinglePostImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
`
export const SinglePostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 28px;
`
export const SinglePostEdit = styled.div`
  float: right;
  font-size: 19px;
`
export const EditIcon = styled.i`
  color: teal;
  margin-right: 10px;
  cursor: pointer;
`
export const DeleteIcon = styled.i`
  color: tomato;
  cursor: pointer;
`

export const DisableEditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const DisableEditIcon = styled.i`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: white;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #b39653;
  font-family: 'Varela Round', sans-serif;
`
export const SinglePostAuthor = styled.span``
export const SinglePostDate = styled.span``

export const SinglePostDesc = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;

  ::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`
export const TextInput = styled.input`
  text-align: center;
  width: 70vw;
  border: none;
  padding: 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 28px;
  border-bottom: 1px solid black;
`
export const WriteText = styled.textarea`
  font-size: 20px;
  border: none;
  padding: 10px;
  width: 100%;
  height: 40vh;
  font-size: 28px;
  border-bottom: 1px solid black;
`
export const EditTitle = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: tomato;
  /* animation: blinker 1s linear infinite;
  @keyframes blinker {
    100% {
      opacity: 0;
    }
  } */
`
export const FileInput = styled.input``

export const BrowseLabel = styled.label`
  margin-top: 20px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
export const ButtonPost = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 400px;
  margin-top: 20px;
  margin: auto;
`
