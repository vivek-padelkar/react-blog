import styled from 'styled-components'

export const Container = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
export const NoPostContainer = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.15)
    ),
    //background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url('/assets/login.jpg');
`
