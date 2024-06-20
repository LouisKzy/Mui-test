import { Stack, Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';


const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"} className='Components'>
      <Badge badgeContent={5} color={"primary"}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color={"secondary"}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} showZero color={"primary"}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color={"primary"}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color={"primary"}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}

export default MuiBadge

