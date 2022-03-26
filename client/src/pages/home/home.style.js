import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
