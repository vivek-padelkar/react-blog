import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../../utils/responsive'

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
  z-index: 999;
  @media screen and (max-width: 800px) {
  }
`

export const TopLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const TopCenter = styled.div`
  flex: 6;

  @media screen and (max-width: 800px) {
    flex: 7;
    display: flex;
    justify-content: space-between;
  }
`

export const TopRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
  }
`
export const TopCenterUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
  }
`
export const TopCenterLi = styled.li`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`
export const TopImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`
export const SearchIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`
export const TopIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`
export const SideBarIcon = styled.i``
