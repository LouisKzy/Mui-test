import { Box } from "@mui/material"


// more content about responsiveness in material ui 
// https://mui.com/material-ui/react-stack/#responsive-values
// https://mui.com/material-ui/react-grid/#responsive-values 
const MuiResponsiveness = () => {
  return (
    <>
      <Box
      height={{ xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }}
      width={{ xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }}
      bgcolor='primary.main'
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
          marginTop: 4,
          bgcolor: 'secondary.main'
        }}
      >

      </Box>
    </>
  )
}

export default MuiResponsiveness
