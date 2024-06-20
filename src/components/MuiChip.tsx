import { Stack, Chip, Avatar } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";


const MuiChip = () => {
  const [chips, setChips] = useState<string[]>(["Chip 1", "Chip 2", "Chip 3"])

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
  }
  return (
    <Stack spacing={1} direction={"row"} className='Components'>
      <Chip label="Basic" />
      <Chip label="Primary" color="primary" />
      <Chip label="Small" size="small"  />
      <Chip avatar={<Avatar>V</Avatar>} label="Outlined" variant="outlined" color="secondary" />
      <Chip label="icon" icon={<FaceIcon />}  />
      <Chip label="Clickable" color="success" onClick={() => alert("Clicked")}/>
      <Chip label="Deletable" color="error" onDelete={() => alert("Delete")} onClick={() => alert("Clicked")}/>
        {chips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))}
    </Stack>
  )
}

export default MuiChip
