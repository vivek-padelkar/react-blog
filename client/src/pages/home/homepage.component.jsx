import React, { useEffect, useState, useContext } from 'react'
import Header from '../../components/header/header.component'
import Posts from '../../components/posts/posts.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import { Container } from './home.style'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Context } from '../../context/context.js'

const Home = () => {
  const { user } = useContext(Context)
  const [posts, setPosts] = useState([])
  const { search } = useLocation()
  console.log('search' + search)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get('/post' + search)
        setPosts(data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchPost()
  }, [search])

  return (
    <>
      <Header />
      <Container>
        <Posts posts={posts} />
        {user && <Sidebar />}
      </Container>
    </>
  )
}

export default Home
