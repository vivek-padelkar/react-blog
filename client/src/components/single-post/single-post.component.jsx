import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import Spinner from '../spinner/spinner.component'
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
  StyledLink,
} from './single-post.style'
import { toast } from 'react-toastify'

const SinglePost = () => {
  const location = useLocation()
  const [post, setPost] = useState({})
  const postId = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/post/${postId}`)
        setPost(data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchPost()
  }, [])

  return (
    <Container>
      {post.title ? (
        <SinglePostWrapper>
          {post.photo && (
            <SinglePostImage src={post.photo} alt="post by user" />
          )}

          <SinglePostTitle>
            {post.title}
            <SinglePostEdit>
              <EditIcon className="fa-solid fa-pen-to-square" />
              <DeleteIcon className="fa-solid fa-trash" />
            </SinglePostEdit>
          </SinglePostTitle>

          <SinglePostInfo>
            <SinglePostAuthor>
              Author:
              <StyledLink to={`/?username=${post.username}`}>
                <b>{post.username}</b>
              </StyledLink>
            </SinglePostAuthor>
            <SinglePostDate>
              {moment(post.updatedAt).fromNow()}...
            </SinglePostDate>
          </SinglePostInfo>

          <SinglePostDesc>{post.desc}</SinglePostDesc>
        </SinglePostWrapper>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default SinglePost
