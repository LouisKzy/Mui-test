import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NaviguateNextIcon from '@mui/icons-material/NavigateNext';


const MuiBreadcrumbs = () => {
  return (
    <Box m={2} className='Components'>
      <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={<NaviguateNextIcon 
        fontSize="large"/>}
        maxItems={2}
        itemsAfterCollapse={1}
        itemsBeforeCollapse={1}
      >
        <Link href="#" underline="hover">Home</Link>
        <Link href="#" underline="hover">Catalog</Link>
        <Link href="#" underline="hover">Accessories</Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
