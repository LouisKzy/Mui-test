import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import { useState } from "react"
const MuiDialog = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='Components'>
      <Button onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog 
        aria-labelledby="dialog-title" 
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle 
          id='dialog-title'
        >
          Submit the test ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText 
            id='dialog-description'
          >
            Are you sure you want to submit the test ? You will not be able to edit it again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MuiDialog
