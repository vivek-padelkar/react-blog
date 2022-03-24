import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/context'
import {
  Container,
  FormWrite,
  WriteFormGroup,
  FileInput,
  TextInput,
  FileIcon,
  BrowseLabel,
  WriteText,
  WriteSubmit,
  WriteImage,
} from './write-post.style'
import { toast } from 'react-toastify'

const WritePost = () => {
  const navigate = useNavigate()
  const { user } = useContext(Context)
  const [title, setTitle] = useState('')
  const [desc, setdesc] = useState('')
  //const [categories, setCategories] = useState([])
  const [file, Setfile] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newPost = {
        title,
        desc,
        user: user.username,
      }
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      if (file) {
        const photo = await uploadFileHandler(file)
        newPost.photo = photo
      }
      await axios.post('/post/', newPost, config)
      toast.success('Post added sucessfully!')
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
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
      <FormWrite onSubmit={handleSubmit}>
        <WriteFormGroup>
          {file && (
            <WriteImage src={URL.createObjectURL(file)} alt="post image" />
          )}

          <BrowseLabel htmlFor="fileInput">
            <FileIcon className="fas fa-plus" value={file} />
          </BrowseLabel>

          <FileInput
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => Setfile(e.target.files[0])}
          />

          <TextInput
            type="text"
            placeholder="Title"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* <TextInput
            ishasHtag={true}
            type="text"
            placeholder="your hastags...(comma (',') seprated)"
            autoFocus={true}
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />*/}
          <WriteText
            placeholder="Tell your Story..."
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
          <WriteSubmit type="submit">Publish</WriteSubmit>
        </WriteFormGroup>
      </FormWrite>
    </Container>
  )
}

export default WritePost
