import styled from 'styled-components'

export const Container = styled.div`
  flex: 9;
  margin-top: 20px;
`
export const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
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
  font-family: 'Lora', sans-serif;
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
