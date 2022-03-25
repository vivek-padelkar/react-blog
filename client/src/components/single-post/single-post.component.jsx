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
  TextInput,
  WriteText,
  EditTitle,
  FileIcon,
  FileInput,
  BrowseLabel,
  ButtonPost,
  DisableEditIcon,
  DisableEditWrapper,
  SinglePostCategories,
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
  const [categories, setCategories] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  const [file, setFile] = useState('')
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/post/${postId}`)
        setPost(data)
        setTitle(data.title)
        setDesc(data.desc)
        setCategories(data.categories)
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

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      if (!title || !desc) {
        return toast.error('Title & desc is mandetory')
      }

      const data = {
        username: user.username,
        title,
        desc,
      }

      if (categories) {
        if (categories.split(',').length <= 0) {
          return toast.error('Please enter each category seprated by comma')
        }
        data.categories = Array.from(categories.split(','))
      }

      if (file) {
        const photo = await uploadFileHandler(file)
        data.photo = photo
      }

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      await axios.put(`/post/${postId}`, data, config)
      toast.success('Post deleted successfully !')
      window.location.reload()
    } catch (error) {
      toast.error(error.messsage)
    }
  }

  const uploadFileHandler = async (file) => {
    const formData = new FormData()
    formData.append('image', file)

    try {
      const config = {
        'Content-Type': 'multipart/form-data',
      }
      const { data } = await axios.post('/upload', formData, config)
      return data.split('/')[2]
    } catch (error) {
      console.log(error)
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
            <SinglePostImage
              src={
                updateMode && file
                  ? URL.createObjectURL(file)
                  : imagepath + post.photo
              }
              alt="post by user"
            />
          )}

          {updateMode && (
            <BrowseLabel htmlFor="fileInput">
              <FileIcon className="fas fa-plus" value={file} />
            </BrowseLabel>
          )}

          {updateMode && (
            <DisableEditWrapper>
              <EditTitle>Stop Editing</EditTitle>
              <DisableEditIcon
                className="fa-solid fa-xmark"
                onClick={(e) => setUpdateMode(false)}
              />
            </DisableEditWrapper>
          )}

          <FileInput
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          {updateMode ? (
            <TextInput
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <SinglePostTitle>
              {post.title}
              {post.username === user.username ? (
                <SinglePostEdit>
                  <EditIcon
                    className="fa-solid fa-pen-to-square"
                    onClick={(e) => {
                      setUpdateMode(true)
                    }}
                  />

                  <DeleteIcon
                    className="fa-solid fa-trash"
                    onClick={() => {
                      setDailgueMessage(
                        'Do you Really, want to delete the post?'
                      )
                      setOpenDailgue(true)
                    }}
                  />
                </SinglePostEdit>
              ) : null}
            </SinglePostTitle>
          )}

          {updateMode && (
            <TextInput
              type="text"
              placeholder="your hastags...(comma (',') seprated)"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          )}

          {Array.isArray(categories) && categories.length > 0 ? (
            <SinglePostCategories>
              <SinglePostAuthor>categories:</SinglePostAuthor>
              {categories.map((cat) => (
                <span key={Date.now() + cat}>
                  <b>{cat}</b>
                </span>
              ))}
            </SinglePostCategories>
          ) : null}

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

          {updateMode ? (
            <WriteText
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell your Story..."
            />
          ) : (
            <SinglePostDesc>{post.desc}</SinglePostDesc>
          )}

          {updateMode && (
            <ButtonPost onClick={(e) => handleUpdate(e)}>Update</ButtonPost>
          )}
        </SinglePostWrapper>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default SinglePost
