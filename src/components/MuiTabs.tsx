import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
const MuiTabs = () => {
  const [value, setValue] = useState("item-1")
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box 
      sx={{ width: "80%", typography: "body1" }} 
      className="Components"
    >
      <TabContext 
        value={value}
      >
        <Box 
          sx={{ borderBottom: 1, borderColor: 'divider', width: "300px" }}
        >
          <TabList 
            aria-label="Tabs example" 
            onChange={handleChange} 
            textColor="secondary" 
            variant="scrollable"
            indicatorColor="secondary"
            scrollButtons="auto"
          >
            <Tab 
              value="1" 
              label="Item One" 
              icon={<FavoriteIcon />}
              iconPosition="bottom"
            />
            <Tab 
              value="2" 
              label="Item Two" 
              disabled
            />
            <Tab 
              value="3" 
              label="Item Three" 
              icon={<FavoriteIcon />}
              iconPosition="start"
            />  
            <Tab 
              value="4" 
              label="Item Four" 
            />  
            <Tab 
              value="5" 
              label="Item Five" 
            />  
            <Tab 
              value="6" 
              label="Item Six" 
            />  
          </TabList>
        </Box>
        <TabPanel 
          value="1"
        > 
          Panel One 
        </TabPanel>
        <TabPanel 
          value="2"
        > 
          Panel Two 
        </TabPanel>
        <TabPanel 
          value="3"
        > 
          Panel Three 
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default MuiTabs
