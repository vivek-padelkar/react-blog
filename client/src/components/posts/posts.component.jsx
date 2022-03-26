import Post from '../post/post.component'
import { Container } from './posts.style'

const Posts = ({ posts }) => {
  return (
    <Container>
      {!posts && <h1>No posts are avilable please , Write one !</h1>}
      {posts && posts.map((post) => <Post key={post._id} post={post} />)}
    </Container>
  )
}

export default Posts
