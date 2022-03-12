import {
  Container,
  SideBarTitle,
  SideBarItem,
  Image,
  SideBarList,
  SideBarListItem,
  SideBarSocial,
  SideBarIcon,
} from './sidebar.style'

const Sidebar = () => {
  return (
    <Container>
      <SideBarItem>
        <SideBarTitle>ABOUT ME</SideBarTitle>
        <Image
          src="https://avatars.githubusercontent.com/u/90445381?v=4"
          alt="user"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vero
          dolorum odit placeat.
        </p>
      </SideBarItem>

      <SideBarItem>
        <SideBarTitle>CATEGORIES</SideBarTitle>
        <SideBarList>
          <SideBarListItem>LIFE</SideBarListItem>
          <SideBarListItem>MUSIC</SideBarListItem>
          <SideBarListItem>SPORTS</SideBarListItem>
          <SideBarListItem>TECH</SideBarListItem>
        </SideBarList>
      </SideBarItem>

      <SideBarItem>
        <SideBarTitle>FOLLOW US</SideBarTitle>
        <SideBarSocial>
          <SideBarIcon className="fa-brands fa-facebook" />
          <SideBarIcon className="fa-brands fa-twitter" />
          <SideBarIcon className="fa-brands fa-pinterest" />
          <SideBarIcon className="fa-brands fa-instagram" />
        </SideBarSocial>
      </SideBarItem>
    </Container>
  )
}

export default Sidebar
