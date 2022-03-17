import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: inherit;
`
export const Container = styled.div`
  width: 385px;
  margin: 25px 25px 40px 25px;
  border: 1 px solid;
  box-shadow: 3px 4px 11px -5px #000000;
`
export const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 250px;
  border-radius: 7px;
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PostCategoryContainer = styled.div``
export const PostCategory = styled.span`
  font-family: 'Varela Round', sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`
export const PostTitle = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
  :hover {
    font-weight: bolder;
    color: #468143;
  }
`
export const PostDate = styled.span`
  font-family: 'Lora', sans-serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  font-weight: 600;
  margin-top: 15px;
`

export const PostDescription = styled.p`
  font-family: 'Varela Round', sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis; //show as ... if overflows
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-left: 5px;
`
