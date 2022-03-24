import styled from 'styled-components'
import Button from '@mui/material/Button'

export const StyledButton = styled(Button)`
  background-color: ${(props) => (props.isdelete ? 'tomato' : 'green')};
  color: white;
  transition: all 0.1s ease-in;
  :hover {
    background-color: white;
    color: black;
  }
`
