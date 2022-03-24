import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { StyledButton } from './dailogueBox.style'

const DailogueBox = ({ action, message, handleDelete, setOpenDailgue }) => {
  return (
    <Dialog
      open={action}
      onClose={action}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
      <DialogActions>
        <Button onClick={(e) => setOpenDailgue(false)}>No</Button>
        <Button
          onClick={(e) => {
            handleDelete()
          }}
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DailogueBox
