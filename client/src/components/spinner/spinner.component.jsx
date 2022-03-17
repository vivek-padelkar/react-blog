import { Container } from './spinner.style'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Spinner = () => {
  return (
    <Container>
      <CircularProgress size={50} />
    </Container>
  )
}

export default Spinner
