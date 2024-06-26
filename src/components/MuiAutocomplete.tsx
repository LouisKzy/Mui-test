import { Stack, TextField, Autocomplete } from "@mui/material"
import { useState } from "react"

type Skill = {
  id: number
  label: string
}

const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"]

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)
  console.log("value", value)
  console.log("skill", skill)
  return (
    <Stack spacing={2} width='250px' className='Components'>
      <Autocomplete 
        value={value}
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(_event: any, newValue: string | null) => {
          setValue(newValue)
        }}
        freeSolo
      />
      <Autocomplete 
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => {setSkill(newValue)}}
      />
    </Stack>
  )
}

export default MuiAutocomplete
