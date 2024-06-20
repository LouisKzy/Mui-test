import { Stack, Rating } from "@mui/material"
import { useState } from "react"
import  FavoriteIcon  from "@mui/icons-material/Favorite"
import FavoriteBorderIcone from "@mui/icons-material/FavoriteBorder"
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  console.log("value", value)
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  return (
    <Stack spacing={2} className='Components'>
      <Rating 
        value={value} 
        precision={0.5} 
        size="small" 
        onChange={handleChange} 
        icon={<FavoriteIcon fontSize="inherit" color="error" />} 
        emptyIcon={<FavoriteBorderIcone fontSize="inherit" />} 
      />
      <Rating 
        value={value} 
        precision={0.5} 
        onChange={handleChange}
        highlightSelectedOnly
        />
      <Rating 
        value={3} 
        precision={0.5} 
        size="large" 
        readOnly
      />
    </Stack>
  )
}

export default MuiRating
