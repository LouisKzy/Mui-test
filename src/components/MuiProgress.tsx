import { Stack, CircularProgress, LinearProgress } from '@mui/material'

const MuiProgress = () => {
  return (
    <Stack spacing={2} width={'80%'} className='Components'>
      <CircularProgress />
      <CircularProgress color='secondary'/>
      <CircularProgress variant='determinate' value={90}/>

      <LinearProgress />
      <LinearProgress color ='secondary'/>
      <LinearProgress variant='determinate' value={90}/>

    </Stack>
  )
}

export default MuiProgress
