import {
  Container,
  PostImage,
  PostInfo,
  PostCategoryContainer,
  PostCategory,
  PostTitle,
  PostDate,
  PostDescription,
} from './post.style'

const Post = () => {
  return (
    <Container>
      <PostImage src="assets/post1.jpg" alt="post by user" />
      <PostInfo>
        <PostCategoryContainer>
          <PostCategory>Tech</PostCategory>
          <PostCategory>Life</PostCategory>
        </PostCategoryContainer>

        <PostTitle>Bought new Desktop</PostTitle>
        <hr />
        <PostDate>1hr ago</PostDate>
      </PostInfo>
      <PostDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum
        explicabo libero rerum vitae quod molestias veniam sunt iure sequi, nemo
        incidunt earum ullam! Sapiente suscipit eius dolorem consequatur fugiat?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum
        explicabo libero rerum vitae quod molestias veniam sunt iure sequi, nemo
        incidunt earum ullam! Sapiente suscipit eius dolorem consequatur fugiat?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum
        explicabo libero rerum vitae quod molestias veniam sunt iure sequi, nemo
        incidunt earum ullam! Sapiente suscipit eius dolorem consequatur fugiat?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum
        explicabo libero rerum vitae quod molestias veniam sunt iure sequi, nemo
        incidunt earum ullam! Sapiente suscipit eius dolorem consequatur fugiat?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum
        explicabo libero rerum vitae quod molestias veniam sunt iure sequi, nemo
        incidunt earum ullam! Sapiente suscipit eius dolorem consequatur fugiat?
      </PostDescription>
    </Container>
  )
}

export default Post
