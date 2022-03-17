import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../spinner/spinner.component'
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
  const [cat, setCat] = useState([])
  useEffect(() => {
    const getCat = async () => {
      const config = {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmRlZDBlMjhiZmUxZjIwMTNmZDVkMyIsImlhdCI6MTY0NzUwNzcyNCwiZXhwIjoxNjQ4MzcxNzI0fQ.JkyIQXV8cZfAtRnnKQjfhO8X0VKFChRN4x1wcWQ-feo',
        },
      }
      try {
        const { data } = await axios.get('/category/', config)
        setCat(data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    getCat()
  }, [])

  return (
    <Container>
      {cat.length > 0 ? (
        <>
          <SideBarItem>
            <SideBarTitle>ABOUT ME</SideBarTitle>
            <Image
              src="https://avatars.githubusercontent.com/u/90445381?v=4"
              alt="user"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              vero dolorum odit placeat.
            </p>
          </SideBarItem>

          <SideBarItem>
            <SideBarTitle>CATEGORIES</SideBarTitle>
            <SideBarList>
              {cat.map((c) => (
                <StyledLink to={`/?cat=${c.name}`}>
                  <SideBarListItem key={c._id}>{c.name}</SideBarListItem>
                </StyledLink>
              ))}
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
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default Sidebar
