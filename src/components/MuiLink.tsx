import { Stack, Link } from "@mui/material"

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4} className='Components'>
      <Link href='#'>Link</Link>
      <Link href='#' color='secondary' underline="hover">Secondary</Link>
      <Link href='#' underline="none">Not Underlined</Link>
    </Stack>
  )
}

export default MuiLink
