import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
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
import DailogueBox from '../dailogueBox/dailogueBox.component'

const SinglePost = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const imagepath = 'http://localhost:5021/uploads/'
  const location = useLocation()
  const [post, setPost] = useState({})
  const postId = location.pathname.split('/')[2]

  const [openDailgue, setOpenDailgue] = useState(false)
  const [dailgueMessage, setDailgueMessage] = useState('')

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

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
  }, [postId])

  const handleDelete = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      await axios.delete(`/post/${postId}`, config)
      toast.success('Post deleted successfully !')
      setOpenDailgue(false)
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <Container>
      <DailogueBox
        action={openDailgue}
        message={dailgueMessage}
        handleDelete={handleDelete}
        setOpenDailgue={setOpenDailgue}
      />

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
                <DeleteIcon
                  className="fa-solid fa-trash"
                  onClick={() => {
                    setDailgueMessage('Do you Really, want to delete the post?')
                    setOpenDailgue(true)
                  }}
                />
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
