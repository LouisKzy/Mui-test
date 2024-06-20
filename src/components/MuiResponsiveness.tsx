
import { Box, Stack } from "@mui/material"
import { styled } from "@mui/material"

// more content about responsiveness in material ui 
// https://mui.com/material-ui/react-stack/#responsive-values
// https://mui.com/material-ui/react-grid/#responsive-values 
const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.darker,
}))
const MuiResponsiveness = () => {
  return (
    <Stack direction='row' spacing={4}>
      <StyledBox />
      <Box
      height={{ xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }}
      width={{ xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }}
      bgcolor='primary.dark'
      >
        
      </Box>
      <Box 
        sx={{
          width: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500
          },
          height: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500 
          },

          bgcolor: 'secondary.light'
        }}
      >

      </Box>
      <Box 
        sx={{
          width: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500
          },
          height: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500 
          },

          bgcolor: 'warning.main'
        }}
      >

      </Box>
      <Box 
        sx={{
          width: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500
          },
          height: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500 
          },

          bgcolor: 'success.main'
        }}
      >

      </Box>
      <Box 
        sx={{
          width: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500
          },
          height: {
            xs: 100, 
            sm: 200, 
            md: 300, 
            lg: 400, 
            xl: 500 
          },

          bgcolor: 'info.main'
        }}
      >

      </Box>
    </Stack>
  )
}

export default MuiResponsiveness
