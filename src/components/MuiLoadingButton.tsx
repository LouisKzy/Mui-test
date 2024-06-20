import { LoadingButton } from "@mui/lab"
import { Stack } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';




const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction={"row"} className='Components'>
      <LoadingButton loading variant="outlined" >Submit</LoadingButton>
      <LoadingButton variant="outlined" >Submit</LoadingButton>

    
      <LoadingButton loadingIndicator="Loading..." variant="outlined" >Fetch Data</LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined" >Fetch Data</LoadingButton>


      <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined" >Save</LoadingButton>
      <LoadingButton loadingIndicator="Loading..." startIcon={<SaveIcon />} variant="outlined" >Save</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton
