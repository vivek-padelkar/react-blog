import {
  Container,
  NotFoundImage,
  NotFoundImageContainer,
  NotFoundTitle,
  NotFoundWrapper,
  NotFoundSubTitle,
  StyledLink,
} from './not-found.style'

const NotFound = ({ message }) => {
  return (
    <Container>
      <NotFoundImageContainer>
        <NotFoundImage src="/assets/meditation.png" />
      </NotFoundImageContainer>
      <NotFoundWrapper>
        <NotFoundTitle>Something's wrong here.</NotFoundTitle>

        <NotFoundSubTitle>
          {!message
            ? `This is a 404 error, which means you've clicked on a bad link or
          entered an invalid URL.`
            : message}
        </NotFoundSubTitle>

        <NotFoundSubTitle>
          Maybe what you are looking for can be found at{' '}
          <StyledLink to="/">Bloggerspot.com</StyledLink>
        </NotFoundSubTitle>
      </NotFoundWrapper>
    </Container>
  )
}

export default NotFound
