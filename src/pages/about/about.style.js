import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const MainBackground = styled.div`
  width: 100vw;
  height: 800px;
  margin-top: 10px;
`
export const AboutImageContainer = styled.div``
export const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.span`
  font-family: 'Varela Round', sans-serif;
  font-size: ${(props) => (props.SmallWidth ? '24px' : '30px')};
  margin-top: 20px;
  font-weight: ${(props) => (props.SmallWidth ? 500 : 600)};
`
export const Subtitle = styled.span`
  margin-top: 10px;
  font-size: 20px;
`
export const AboutData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const AboutLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AboutLeftInfo = styled.span`
  font-size: 24px;
  line-height: 40px;
  text-align: center;
`
export const AboutRightWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
export const Icon = styled.i`
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledA = styled.a`
  color: ${(props) => (props.ChangeColor ? ' #0a66c2' : 'black')};
  text-decoration: none;
`
export const Note = styled.span`
  margin-top: 100px;
  font-weight: 600px;
  font-family: 'Lora', sans-serif;
`
