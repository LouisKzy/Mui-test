import { 
  Box, 
  FormControl, 
  FormLabel, FormControlLabel, 
  RadioGroup, 
  Radio,
  FormHelperText
} from "@mui/material"
import { useState } from "react"

const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  console.log("value", value)
  console.log("value2", value2)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value)
  }
  return (
    <Box gap={2} className='Components'>
      <FormControl>
        <FormLabel>
          Years of Experience row
        </FormLabel>
        <RadioGroup 
        name="job-experiance-group"
        value={value}
        aria-labelledby="job-experiance-group-label"
        onChange={handleChange}
        row
        >
          <FormControlLabel 
            control={<Radio size="small" color="secondary"/>} 
            label="0-2" 
            value="0-2"
          />
          <FormControlLabel 
            control={<Radio/>} 
            label="3-5" 
            value="3-5"
          />
          <FormControlLabel 
            control={<Radio size="medium" color="success"/>} 
            label="6-10" 
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText error>Helper text error only</FormHelperText>
      </FormControl>
      
      <FormControl error>
        <FormLabel>
          Years of Experience column error global
        </FormLabel>
        <RadioGroup 
        name="job-experiance-group"
        value={value2}
        aria-labelledby="job-experiance-group-label"
        onChange={handleChange2}
        >
          <FormControlLabel 
            control={<Radio/>} 
            label="0-2" 
            value="0-2"
          />
          <FormControlLabel 
            control={<Radio/>} 
            label="3-5" 
            value="3-5"
          />
          <FormControlLabel 
            control={<Radio/>} 
            label="6-10" 
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
