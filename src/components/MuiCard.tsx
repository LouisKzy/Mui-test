import { Card, Box, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia 
          component='img'
          height='140px'
          image='https://picsum.photos/200/300'
          alt="random image"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            React is a JavaScript library for building user interfaces. React can bu used as a base in the development of single-page or mobile applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
