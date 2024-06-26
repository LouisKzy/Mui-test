import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Typography
} from '@mui/material'
import ExpendMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Accordion 
        className='Components'
        expanded={expanded==='panel1'} 
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary 
          id='panel1-header' 
          aria-controls='panel1-content' 
          expandIcon={<ExpendMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        expanded={expanded==='panel2'} 
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary 
          id='panel2-header' 
          aria-controls='panel2-content' 
          expandIcon={<ExpendMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        expanded={expanded==='panel3'} 
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary 
          id='panel3-header' 
          aria-controls='panel3-content' 
          expandIcon={<ExpendMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
