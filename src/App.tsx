import { Box, colors, createTheme, ThemeProvider } from '@mui/material'

import './App.css'
// import MuiTypo from './components/MuiTypo'
// import MuiTextField from './components/MuiTextField'
// import MuiRadioButton from './components/MuiRadioButton'
// import MuiCheckbox from './components/MuiCheckbox'
// import MuiSwitch from './components/MuiSwitch'
// import MuiRating from './components/MuiRating'
// import MuiAutocomplete from './components/MuiAutocomplete'
// import MuiSelect from './components/MuiSelect'
// import MuiLayout from './components/MuiLayout'
// import MuiCard from './components/MuiCard'
// import MuiAccordion from './components/MuiAccordion'
// import MuiImageList from './components/MuiImageList'
// import MuiLink from './components/MuiLink'
// import MuiBreadcrumbs from './components/MuiBreadcrumbs'
// import MuiNavbar from './components/MuiNavbar'
// import MuiDrawer from './components/MuiDrawer'
// import MuiSpeedDial from './components/MuiSpeedDial'
// import MuiButton from './components/MuiButton'
// import MuiBottomNavigation from './components/MuiBottomNavigation'
// import MuiAvatar from './components/MuiAvatar'
// import MuiBadge from './components/MuiBadge'
// import MuiList from './components/MuiList'
// import MuiChip from './components/MuiChip'
// import MuiTooltip from './components/MuiTooltip'
// import MuiTable from './components/MuiTable'
// import MuiAlert from './components/MuiAlert'
// import MuiSnackbar from './components/MuiSnackbar'
// import MuiDialog from './components/MuiDialog'
// import MuiProgress from './components/MuiProgress'
// import MuiSkeleton from './components/MuiSkeleton'
// import MuiLoadingButton from './components/MuiLoadingButton'
// import MuiTabs from './components/MuiTabs'
// import MuiTimeline from './components/MuiTimeline'
// import MuiMasory from './components/MuiMasory'
import MuiResponsiveness from './components/MuiResponsiveness'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#24D26D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6a0dad', 
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',

      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffc107',
      contrastText: '#000000', 
    },
    info: {
      main: '#17a2b8',
      contrastText: '#ffffff',
    },
    success: {
      main: '#007bff',
      contrastText: '#ffffff',
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    }
  },
});



function App() {
  return (  
    <ThemeProvider theme={theme}>
      <Box className='App' m={4} >
        {/* <MuiTypo /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasory /> */}
        <MuiResponsiveness />
      </Box>
    </ThemeProvider>
  )
}

export default App
