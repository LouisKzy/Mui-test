import { Box, TextField, MenuItem, Typography } from "@mui/material"
import { useState } from "react"
const MuiSelect = () => {
  const [country, setCountry] = useState<string>('')
  const [countries, setCountries] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  console.log("country", country)
  console.log("countries", countries)
  return (
    <>
      <Box 
        width='250px'
      >
        <Typography 
          variant='h4' 
          gutterBottom
        >
          Select one of the country
        </Typography>
        <TextField 
          label='Select country' 
          select value={country} 
          onChange={handleChange} 
          fullWidth
        >

          <MenuItem 
            value='IN'
          >
            India
          </MenuItem>

          <MenuItem 
            value='US'
          >
            USA
          </MenuItem>

          <MenuItem 
          value='CA'
          >
            Canada
          </MenuItem>
        </TextField>
      </Box>

      <Box width='250px'>
        <Typography 
          variant='h4' 
          gutterBottom
        >
          Select one or more of the countries
        </Typography>
        <TextField 
          label='Select country' 
          select 
          value={countries} 
          onChange={handleChangeMultiple} 
          fullWidth 
          SelectProps={{
            multiple: true
          }}
        >

          <MenuItem 
            value='IN'
          >
            India
          </MenuItem>

          <MenuItem 
          value='US'
          >
            USA
          </MenuItem>

          <MenuItem 
          value='CA'
          >
            Canada
          </MenuItem>
        </TextField>
      </Box>
    </>
  )
}

export default MuiSelect
