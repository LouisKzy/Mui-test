import { Stack, TextField, Typography, InputAdornment } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextField = () => {
  const [visibility , setVisibility] = useState<boolean>(false)
  const [value , setValue] = useState<string>("")
  const handleVisibility = () => {
    setVisibility(!visibility)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  

  return (
    <Stack spacing={4} className='Components'>
      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4">Base</Typography>
        <TextField label="Name" variant="outlined"/>
        <TextField label="Name" variant="filled"/>
        <TextField label="Name" variant="standard"/>
      </Stack>
      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4" gutterBottom >Color</Typography>
        <TextField label="Secondary" color="secondary" variant="outlined"/>
        <TextField label="Success" color="success" variant="filled"/>
        <TextField label="Warning" color="warning" variant="standard"/>
      </Stack>
      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4" gutterBottom >Size</Typography>
        <TextField label="Small" size="small" variant="outlined"/>
        <TextField label="Normal" size="medium" variant="outlined"/>

      </Stack>
      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4" gutterBottom >Props variant</Typography>
        <TextField label="Name" variant="outlined" required/>
        <TextField label="Name" variant="outlined" helperText="Some important helper text"/>
        <TextField label="Password" type="password" variant="outlined"/>
        <TextField label="Disabled" disabled variant="outlined"/>
        <TextField label='Read Only' InputProps={{readOnly: true}}/>
        <TextField label="Paswword"/>
      </Stack>

      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4" gutterBottom >Adornments</Typography>
        <TextField 
          label="Amount" 
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField 
        label="Weight" 
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
        />
      </Stack>

      <Stack display='block' direction='row' spacing={2}>
        <Typography variant="h4" gutterBottom >Visibility</Typography>
        <TextField
          label="Password"
          type={visibility ? "text" : "password"}
          variant="outlined"
          value={value}
          required
          onChange={handleChange}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password with anyone"}
          InputProps={{
            endAdornment: visibility ? 
              <InputAdornment position="end"><VisibilityIcon onClick={handleVisibility} /></InputAdornment> 
              : 
              <InputAdornment position="end"><VisibilityOffIcon onClick={handleVisibility} /></InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField

