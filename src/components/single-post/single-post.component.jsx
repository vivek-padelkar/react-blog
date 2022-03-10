import {
  Container,
  SinglePostImage,
  SinglePostWrapper,
  SinglePostTitle,
  EditIcon,
  DeleteIcon,
  SinglePostEdit,
  SinglePostInfo,
  SinglePostAuthor,
  SinglePostDate,
  SinglePostDesc,
} from './single-post.style'

const SinglePost = () => {
  return (
    <Container>
      <SinglePostWrapper>
        <SinglePostImage src="assets/post1.jpg" alt="post by user" />
        <SinglePostTitle>
          Bought new desktop
          <SinglePostEdit>
            <EditIcon className="fa-solid fa-pen-to-square" />
            <DeleteIcon className="fa-solid fa-trash" />
          </SinglePostEdit>
        </SinglePostTitle>

        <SinglePostInfo>
          <SinglePostAuthor>
            Author:<b>Vivek</b>
          </SinglePostAuthor>
          <SinglePostDate>1 hor ago..</SinglePostDate>
        </SinglePostInfo>

        <SinglePostDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          repudiandae placeat laboriosam. Praesentium vel sint veritatis sunt
          eligendi. Atque, nihil assumenda molestiae dolore commodi placeat
          officiis rerum vitae excepturi laudantium? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Incidunt magni, vitae nemo numquam
          labore esse animi quam aut harum repellendus fuga non! Est delectus
          quia commodi repudiandae soluta repellat enim. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Laborum pariatur, eveniet
          asperiores provident vitae placeat cumque incidunt cum ducimus
          tempore. Nesciunt natus rerum cumque similique sequi laborum in minima
          cupiditate!
        </SinglePostDesc>
      </SinglePostWrapper>
    </Container>
  )
}

export default SinglePost
