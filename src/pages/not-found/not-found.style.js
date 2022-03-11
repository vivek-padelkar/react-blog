import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Josefin Sans', sans-serif;
`
export const NotFoundImage = styled.img`
  width: 100%;
  height: 100%;
`

export const NotFoundImageContainer = styled.div`
  height: 350px;
  width: 350px;
  background-color: red;
  margin: auto;
`
export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const NotFoundTitle = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 60px;
  color: #0f370a;
  font-weight: 600;
  margin-bottom: 20px;
`
export const NotFoundSubTitle = styled.p`
  font-size: 25px;
  color: #0f370a;
  font-weight: 300;
  line-height: 35px;
`

export const StyledLink = styled(Link)`
  /* text-decoration: none; */
  color: #0f370a;
`
