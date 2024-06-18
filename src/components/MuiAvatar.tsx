import { Stack, Avatar, AvatarGroup } from "@mui/material"

const MuiAvatar = () => {
  return (
    <Stack spacing={4} p={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light"}}>BW</Avatar>
        <Avatar sx={{bgcolor: "success.light"}}>CK</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light"}}>BW</Avatar>
          <Avatar sx={{bgcolor: "success.light"}}>CK</Avatar>
          <Avatar 
            src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane doe' 
          />
          <Avatar 
            src='https://randomuser.me/api/portraits/men/51.jpg' 
            alt='John doe' 
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar variant='rounded' sx={{ bgcolor: "primary.light", width: 56, height: 56 }} >BW</Avatar>
        <Avatar variant='rounded' sx={{bgcolor: "success.light", width: 56, height: 56 }}>CK</Avatar>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar
