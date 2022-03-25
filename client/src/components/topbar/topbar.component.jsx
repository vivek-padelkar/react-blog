import { useContext } from 'react'
import { Context } from '../../context/context'
import { loginContants } from '../../context/constants'
import {
  Container,
  TopLeft,
  TopRight,
  TopCenter,
  TopCenterUl,
  TopCenterLi,
  TopImage,
  TopIcon,
  SearchIcon,
  StyledLink,
} from './topbar.style'

const Topbar = () => {
  const imagepath = 'http://localhost:5021/uploads/'
  const { user, dispatch } = useContext(Context)

  const handleLogout = async (e) => {
    dispatch({ type: loginContants.LOGOUT })
  }

  return (
    <Container>
      <TopLeft>
        <TopIcon className="fa-brands fa-facebook" />
        <TopIcon className="fa-brands fa-twitter" />
        <TopIcon className="fa-brands fa-pinterest" />
        <TopIcon className="fa-brands fa-instagram" />
      </TopLeft>

      <TopCenter>
        <TopCenterUl>
          <TopCenterLi>
            <StyledLink to="/">HOME</StyledLink>
          </TopCenterLi>

          <TopCenterLi>
            <StyledLink to="/about">ABOUT</StyledLink>
          </TopCenterLi>

          <TopCenterLi>
            <StyledLink to="/writepost">WRITE</StyledLink>
          </TopCenterLi>

          <TopCenterLi>
            <StyledLink to="/login" onClick={handleLogout}>
              {user ? 'LOGOUT' : null}
            </StyledLink>
          </TopCenterLi>
        </TopCenterUl>
      </TopCenter>

      <TopRight>
        {user ? (
          <StyledLink to="/settings">
            <TopImage src={imagepath + user.profilePicture} alt="user" />
          </StyledLink>
        ) : (
          <StyledLink to="/login">LOGIN/REGISTER</StyledLink>
        )}

        <SearchIcon className="fa-solid fa-magnifying-glass" />
      </TopRight>
    </Container>
  )
}

export default Topbar
