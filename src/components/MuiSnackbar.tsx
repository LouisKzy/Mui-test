import { Snackbar, Button, Alert, AlertProps } from "@mui/material"
import { useState, forwardRef } from "react"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />
  }
)
const MuiSnackbar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <div className='Components'>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar 
        message="Form submitted successfully!" 
        autoHideDuration={3000} 
        open={open} 
        onClose={() => handleClose()}
        anchorOrigin={
          {vertical: 'top', horizontal: 'right'}} 
      /> */}
      <Snackbar 
        open={open}
        autoHideDuration={6000}
        onClose={() => handleClose()}
      > 
        <SnackbarAlert severity="success" onClose={() => handleClose()}> 
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </div>
  )
}

export default MuiSnackbar
