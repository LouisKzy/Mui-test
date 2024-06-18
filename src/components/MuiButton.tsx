import { Stack, Button, Typography, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>, 
    updatedFormats: string[]) => {
      setFormats(updatedFormats)
  }
  const [formats2, setFormats2] = useState<string | null>(null)
  const handleFormatChange2 = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null) => {
      setFormats2(updatedFormats)
  }
  console.log("formats", formats)
  console.log("formats2", formats2)
  return (
    <Stack spacing={4} sx={{display: 'flex'}} >
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4">Base</Typography>
        <Button variant="text" href='https://google.com' >Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4" gutterBottom >Color contained</Typography>
        <Button variant="contained" color='primary'>Primary</Button>
        <Button variant="contained" color='secondary'>Secondary</Button>
        <Button variant="contained" color='error'>Error</Button>
        <Button variant="contained" color='warning'>Warning</Button>
        <Button variant="contained" color='info'>Info</Button>
        <Button variant="contained" color='success'>Success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4" >Color text</Typography>
        <Button variant="text" color='primary'>Primary</Button>
        <Button variant="text" color='secondary'>Secondary</Button>
        <Button variant="text" color='error'>Error</Button>
        <Button variant="text" color='warning'>Warning</Button>
        <Button variant="text" color='info'>Info</Button>
        <Button variant="text" color='success'>Success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4" >Color outlined</Typography>
        <Button variant="outlined" color='primary'>Primary</Button>
        <Button variant="outlined" color='secondary'>Secondary</Button>
        <Button variant="outlined" color='error'>Error</Button>
        <Button variant="outlined" color='warning'>Warning</Button>
        <Button variant="outlined" color='info'>Info</Button>
        <Button variant="outlined" color='success'>Success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4" >Size</Typography>
        <Button variant="contained" size='small'>Small</Button>
        <Button variant="contained" size='medium'>Medium</Button>
        <Button variant="contained" size='large'>Large</Button>

        <Button variant="outlined" size='small'>Small</Button>
        <Button variant="outlined" size='medium'>Medium</Button>
        <Button variant="outlined" size='large'>Large</Button>

        <Button variant="text" size='small'>Small</Button>
        <Button variant="text" size='medium'>Medium</Button>
        <Button variant="text" size='large'>Large</Button>

        <Button variant="text" size='small'><Typography variant="h6">Typo h6</Typography></Button>
        <Button variant="text" size='medium'><Typography variant="subtitle1">Typo subtitle1</Typography></Button>
        <Button variant="text" size='small'><Typography variant="h3">Typo h3</Typography></Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Typography variant="h4" >Icons buttons</Typography>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('clicked')}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton color='primary' size='small' aria-label="send"> <SendIcon /> </IconButton>
        <IconButton color='success' size='large' aria-label="send"> <SendIcon /> </IconButton>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
      <Typography variant="h4" >Group buttons</Typography>
        <ButtonGroup aria-label="conatined secondary button group" variant="contained" orientation="vertical" color='secondary'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="outlined primary button group" variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="textprimary button group" variant="text" size='small'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
      <Typography variant="h4" >Toggle Group buttons</Typography>
        <ToggleButtonGroup 
          aria-label='text formatting'
          value={formats2} 
          onChange={handleFormatChange2}
          size='small'
          color='success'
          orientation='vertical'
          exclusive>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup 
          aria-label='text formatting'
          value={formats} 
          onChange={handleFormatChange}
          size='small'
          color='success'
          orientation='vertical'>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
