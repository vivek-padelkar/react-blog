import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: inherit;
`
export const Container = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`
export const SideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    padding: 30px;
  }
`
export const SideBarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 90%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`
export const Image = styled.img`
  margin-top: 15px;
  width: 300px;
`
export const SideBarList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const SideBarListItem = styled.li`
  cursor: pointer;
`
export const SideBarSocial = styled.div`
  margin-top: 10px;
  width: 250px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`
export const SideBarIcon = styled.i`
  font-size: 16px;
  cursor: pointer;
`
