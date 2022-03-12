import React from 'react'
import Header from '../../components/header/header.component'
import Posts from '../../components/posts/posts.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import { Container } from './home.style'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  )
}

export default Home
