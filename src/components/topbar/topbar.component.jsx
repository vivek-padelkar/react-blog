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
} from './topbar.style'

const Topbar = () => {
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
          <TopCenterLi>HOME</TopCenterLi>
          <TopCenterLi>ABOUT</TopCenterLi>
          <TopCenterLi>CONTACT</TopCenterLi>
          <TopCenterLi>WRITE</TopCenterLi>
          <TopCenterLi>LOGOUT</TopCenterLi>
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
