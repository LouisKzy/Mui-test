import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

const MuiLayout = () => {
  return (
    <Paper className='Components' sx={{ padding:'32px'}} elevation={4}>
      <Stack 
        sx={{ border: '1px solid' }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        padding={2}
        margin={2}
      >
        <Box 
          sx={{
            bgcolor: "primary.main",
            color: "white",
            padding: '16px',
            height: '100px',
            width: '100px',
            '&:hover': {
              bgcolor: 'primary.light',
            }}
          }
          >
          Spooky fait des tests
        </Box>
        <Box 
          display='flex' 
          height='100px' 
          width='100px' 
          bgcolor='success.light'
          p={2}
          >
          Spooky fait d'autres tests
        </Box>
      </Stack>
      <Grid container my={6} spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>
            Item 5
          </Box>
        </Grid>
        <Grid item xs >
          <Box bgcolor='primary.light' p={2}>
            Item 6
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>
            Item 7
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>
            Item 8
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MuiLayout
