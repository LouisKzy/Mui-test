import { Stack, Alert, AlertTitle, Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';


const MuiAlert = () => {
  return (
    <Stack spacing={2} width={'50%'} className='Components'>
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is a success alert
      </Alert>
      <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        This is a info alert 
      </Alert>
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert
      </Alert>

      <Alert variant="outlined" severity='error'>
        <AlertTitle>Error outlined</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity='success'>
        <AlertTitle>Success outlined</AlertTitle>
        This is a success alert
        </Alert>
      <Alert variant="outlined" severity='info'>
        <AlertTitle>Info outlined</AlertTitle>
        This is an info alert
        </Alert>
      <Alert variant="outlined" severity='warning'>
        <AlertTitle>Warning outlined</AlertTitle>
        This is a warning alert
        </Alert>

      <Alert variant="filled" severity='error' onClose={() => alert('close')}>
        <AlertTitle>Error filled</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity='warning'>
        <AlertTitle>Warning filled</AlertTitle>
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity='info'>
        <AlertTitle>Info filled</AlertTitle>
        This is an info alert
      </Alert>
      <Alert 
        variant="filled" 
        severity='success' 
        icon={<CheckIcon fontSize="inherit" />} 
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success filled</AlertTitle>
        This is a success alert
      </Alert>
    </Stack>
  )
}

export default MuiAlert
