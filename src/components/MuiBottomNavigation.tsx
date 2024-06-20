import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0)
  const selectedIcon = (value: number) => {
    switch (value) {
      case 0:
        return <HomeIcon />
      case 1:
        return <FavoriteIcon />
      case 2:
        return <PersonIcon />
      default:
        return <div>Select a value</div>
    }
  }

  return (
    <div className='Components'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {selectedIcon(value)}
      </div>
      <BottomNavigation 
        sx={{ width: '100%', position: 'absolute', bottom: 0 }}
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        >
        <BottomNavigationAction label="Home " icon={<HomeIcon />}/>
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />}/>
        <BottomNavigationAction label="Profile" icon={<PersonIcon />}/>
      </BottomNavigation>
    </div>
  )
}

export default MuiBottomNavigation
