import { Tooltip, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
const MuiTooltip = () => {
  return (
    // Il y 12 placement differents pour le tooltip
    <Tooltip 
      className='Components'
      title="Delete" 
      placement="right" 
      arrow 
      enterDelay={500} 
      leaveDelay={500}
    > 
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}

export default MuiTooltip
