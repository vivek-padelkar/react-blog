import moment from 'moment'
import {
  Container,
  PostImage,
  PostInfo,
  PostCategoryContainer,
  PostCategory,
  PostTitle,
  PostDate,
  PostDescription,
  StyledLink,
} from './post.style'

const Post = ({ post }) => {
  return (
    <Container>
      {post.photo && <PostImage src={post.photo} alt="post by user" />}
      <PostInfo>
        <PostCategoryContainer>
          {post.categories.map((cat) => (
            <PostCategory key={cat}>{cat}</PostCategory>
          ))}
        </PostCategoryContainer>

        <StyledLink to={`/post/${post._id}`}>
          <PostTitle>{post.title}</PostTitle>
        </StyledLink>

        <hr />
        <PostDate> {moment(post.updatedAt).fromNow()}</PostDate>
      </PostInfo>
      <PostDescription>{post.desc}</PostDescription>
    </Container>
  )
}

export default Post
