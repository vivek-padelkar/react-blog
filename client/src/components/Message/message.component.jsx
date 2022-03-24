import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import Fade from '@mui/material/Fade'
import { Contaoner } from './message.style'

const Message = ({ message, messageType, children }) => {
  return (
    <Contaoner>
      <Fade in={true}>
        <Alert severity={messageType}>{children}</Alert>
      </Fade>
    </Contaoner>
  )
}

export default Message
