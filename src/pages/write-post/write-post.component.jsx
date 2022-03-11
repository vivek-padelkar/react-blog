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

const WritePost = () => {
  return (
    <Container>
      <FormWrite>
        <WriteImage
          src="https://images.pexels.com/photos/3388217/pexels-photo-3388217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="post image"
        />
        <WriteFormGroup>
          <BrowseLabel htmlFor="fileInput">
            <FileIcon className="fas fa-plus" />
          </BrowseLabel>

          <FileInput type="file" id="fileInput" style={{ display: 'none' }} />
          <TextInput type="text" placeholder="title" autoFocus={true} />
        </WriteFormGroup>

        <WriteFormGroup>
          <WriteSubmit>Publish</WriteSubmit>
          <WriteText placeholder="Tell your Story..." />
        </WriteFormGroup>
      </FormWrite>
    </Container>
  )
}

export default WritePost
