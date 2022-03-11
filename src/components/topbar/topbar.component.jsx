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
  const user = true
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
            <StyledLink to="/login">{user ? 'LOGOUT' : 'LOGIN'}</StyledLink>
          </TopCenterLi>
        </TopCenterUl>
      </TopCenter>
      <TopRight>
        <TopImage
          src="https://avatars.githubusercontent.com/u/90445381?v=4"
          alt="user"
        />
        <SearchIcon className="fa-solid fa-magnifying-glass" />
      </TopRight>
    </Container>
  )
}

export default Topbar
