import { Container } from './single.style'
import Sidebar from '../../components/sidebar/sidebar.component'
import SinglePost from '../../components/single-post/single-post.component'

const Single = () => {
  return (
    <Container>
      <SinglePost />
      <Sidebar />
    </Container>
  )
}

export default Single
