import { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Context } from '../../context/context.js'
import { loginContants } from '../../context/constants.js'
import Sidebar from '../../components/sidebar/sidebar.component'
import {
  Container,
  SettingsWrapper,
  SettingsTitle,
  SettingsUpdateTitle,
  SettingsDeleteTitle,
  SettingsForm,
  PPLabel,
  SttingsPP,
  PPImage,
  PPUserIcon,
  Label,
  TextInput,
  SettingsSubmit,
} from './settings.style'

const Settings = () => {
  const { user, dispatch } = useContext(Context)
  const [username, setUsername] = useState(user.username)
  const [bio, setBio] = useState(user.bio)
  const [email, setEmail] = useState(user.email)
  const [file, setFile] = useState('')
  const [password, setPassword] = useState('')
  const imagepath = 'http://localhost:5021/uploads/'

  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch({ type: loginContants.UPDATE_START })
    try {
      const reqData = {
        username,
        email,
        bio,
      }

      if (password) {
        reqData.password = password
      }
      if (file) {
        const photo = await uploadFileHandler(file)
        reqData.profilePicture = photo
      }

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const { data } = await axios.put(`/api/user/${user._id}`, reqData, config)
      dispatch({ type: loginContants.UPDATE_SUCCESS, payload: data })
      toast.success('Profile has been updated successfully !')
    } catch (error) {
      console.log(error)
      dispatch({
        type: loginContants.UPDATE_FAIL,
        payload: error.response.data.message,
      })
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
      const { data } = await axios.post('/api/upload', formData, config)
      return data.split('/')[2]
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <Container>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsUpdateTitle> Update your account</SettingsUpdateTitle>
        </SettingsTitle>

        <SettingsForm>
          <PPLabel>Profile Picture</PPLabel>
          <SttingsPP>
            <PPImage
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePicture
                  ? imagepath + user.profilePicture
                  : 'https://www.cmrad.com/images/no-avatar.png?91eb3221c85873fb856995c8791edd66'
              }
              alt="selected image"
            />

            <label htmlFor="Fileinput">
              <PPUserIcon className="fas fa-plus" />
            </label>
            <input
              type="file"
              id="Fileinput"
              onChange={(e) => setFile(e.target.files[0])}
              hidden
            />
          </SttingsPP>

          <Label>Bio</Label>
          <TextInput
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <Label>Username</Label>
          <TextInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label>Email</Label>
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label>Password</Label>
          <TextInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <SettingsSubmit type="submit" onClick={(e) => handleUpdate(e)}>
            Update
          </SettingsSubmit>
        </SettingsForm>
      </SettingsWrapper>
    </Container>
  )
}

export default Settings
