import { 
  Box, 
  FormControlLabel, 
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  Typography
} from "@mui/material"
import { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheckbox = () => {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log("checked", checked)
  console.log("checked2", checked2)
  console.log("skills", skills)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked)
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <Typography variant="h4">Checkbox</Typography>
        <FormControlLabel 
          label="I accept terms and conditions" 
          control={
            <Checkbox checked={checked} 
            onChange={handleChange}
            size="small"
            color="secondary"
          />
          }
        />
      </Box>  
      <Box>
        <Typography variant="h4">Checkbox Icons</Typography>
        <Checkbox 
          icon={<BookmarkBorderIcon/>} 
          checkedIcon={<BookmarkIcon/>}
          checked={checked2} 
          onChange={handleChange2}
        />
      </Box>
      <Box>
        <Typography variant="h4">Checkbox Group</Typography>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel 
              label="HTML"
              value="html"
              control={
                <Checkbox 
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              } 
            />
            <FormControlLabel 
              label="CSS"
              value="css"
              control={
                <Checkbox 
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              } 
            />
            <FormControlLabel 
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox 
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              } 
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox
