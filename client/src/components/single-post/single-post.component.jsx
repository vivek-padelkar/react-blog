import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import { Context } from '../../context/context'
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
  const { user } = useContext(Context)
  const imagepath = 'http://localhost:5021/uploads/'
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
            <SinglePostImage src={imagepath + post.photo} alt="post by user" />
          )}

          <SinglePostTitle>
            {post.title}
            {post.username === user.username ? (
              <SinglePostEdit>
                <EditIcon className="fa-solid fa-pen-to-square" />
                <DeleteIcon className="fa-solid fa-trash" />
              </SinglePostEdit>
            ) : null}
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
