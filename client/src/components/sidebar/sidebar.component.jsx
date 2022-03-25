import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../spinner/spinner.component'
import { Context } from '../../context/context.js'
import {
  Container,
  SideBarTitle,
  SideBarItem,
  Image,
  SideBarList,
  SideBarListItem,
  SideBarSocial,
  SideBarIcon,
  StyledLink,
} from './sidebar.style'

const Sidebar = () => {
  const imagepath = 'http://localhost:5021/uploads/'
  const { user } = useContext(Context)
  const [cat, setCat] = useState([])

  useEffect(() => {
    const getCat = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      try {
        const { data } = await axios.get(
          `/category/getusercat/?username=${user.username}`,
          config
        )
        setCat(data.cat)
      } catch (error) {
        toast.error(error.message)
      }
    }
    getCat()
  }, [])

  return (
    <Container>
      <SideBarItem>
        <SideBarTitle>ABOUT ME</SideBarTitle>
        <Image
          src={
            user.profilePicture
              ? imagepath + user.profilePicture
              : 'https://www.cmrad.com/images/no-avatar.png?91eb3221c85873fb856995c8791edd66'
          }
          alt="user profile photo"
        />
        <p>{user.bio}</p>
      </SideBarItem>

      {cat.length > 0 ? (
        <SideBarItem>
          <SideBarTitle>CATEGORIES</SideBarTitle>
          <SideBarList>
            {cat.map((c) => (
              <StyledLink to={`/?cat=${c}`}>
                <SideBarListItem key={c}>{c}</SideBarListItem>
              </StyledLink>
            ))}
          </SideBarList>
        </SideBarItem>
      ) : null}

      {/*<SideBarItem>
        <SideBarTitle>FOLLOW US</SideBarTitle>
        <SideBarSocial>
          <SideBarIcon className="fa-brands fa-facebook" />
          <SideBarIcon className="fa-brands fa-twitter" />
          <SideBarIcon className="fa-brands fa-pinterest" />
          <SideBarIcon className="fa-brands fa-instagram" />
        </SideBarSocial>
      </SideBarItem>*/}
    </Container>
  )
}

export default Sidebar
