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
  return (
    <Container>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsUpdateTitle> Update your account</SettingsUpdateTitle>
          <SettingsDeleteTitle> Delete account</SettingsDeleteTitle>
        </SettingsTitle>

        <SettingsForm>
          <PPLabel>Profile Picture</PPLabel>
          <SttingsPP>
            <PPImage
              src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="selected image"
            />
            <label htmlFor="Fileinput">
              <PPUserIcon className="fa-solid fa-circle-user" />
            </label>
            <input type="file" id="Fileinput" hidden />
          </SttingsPP>

          <Label>Bio</Label>
          <TextInput type="text" placeholder="Bio" />
          <Label>Username</Label>
          <TextInput type="text" placeholder="Username" />
          <Label>Email</Label>
          <TextInput type="email" placeholder="Email" />
          <Label>Password</Label>
          <TextInput type="password" placeholder="Password" />
          <SettingsSubmit type="submit">Update</SettingsSubmit>
        </SettingsForm>
      </SettingsWrapper>
      <Sidebar />
    </Container>
  )
}

export default Settings
