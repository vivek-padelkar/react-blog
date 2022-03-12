import { Link } from 'react-router-dom'
import {
  Container,
  AboutImageContainer,
  AboutImage,
  TitleWrapper,
  Title,
  Subtitle,
  AboutLeftWrapper,
  AboutRightWrapper,
  AboutData,
  AboutLeftInfo,
  Icon,
  IconContainer,
  StyledA,
  MainBackground,
  Note,
} from './about.style'

const About = () => {
  return (
    <Container>
      <AboutImage src="/assets/avatar.jpg" alt="image of developer" />

      <TitleWrapper>
        <Title>Vivek Padelkar</Title>
        <Subtitle>React | Node JS | Mongo DB</Subtitle>
      </TitleWrapper>

      <AboutData>
        <AboutLeftWrapper>
          <Title SmallWidth={true}>About me</Title>
          <br />
          <AboutLeftInfo>
            My passion is making ideas come to life, be it working solo, as part
            of a team or leading a team of fellow developers.
            <br />
            These days my time is spent researching, designing, and coding.
            <br />
            Out of the office you’ll find me dreaming of soccer, playing bass
            guitar, and petting all the good dogs.
          </AboutLeftInfo>
        </AboutLeftWrapper>

        <AboutRightWrapper>
          <Title SmallWidth={true}>Let's be internet BFFs</Title>
          <IconContainer>
            <StyledA href="https://github.com/vivek-padelkar">
              <Icon className="fa-brands fa-github-square" />
            </StyledA>

            <StyledA
              href="https://www.linkedin.com/in/vivekpadelkar/"
              ChangeColor={true}
            >
              <Icon className="fa-brands fa-linkedin" />
            </StyledA>
          </IconContainer>
        </AboutRightWrapper>
      </AboutData>

      <Note>Designed & developed by vivek padelkar @2022</Note>
    </Container>
  )
}

export default About
