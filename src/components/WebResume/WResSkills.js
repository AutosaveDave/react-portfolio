import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const WResSkills = ( {skills} ) => {
  const SkillItem = ( {_skill} ) => (
    <>
      <Typography variant="p">{ _skill.id }</Typography>
    </>
  );
  const SkillGroup = ( {groupName, _skills} ) => (
    <>
    <Typography variant="body1" textAlign='start' pl={1} pt={1}
        sx={{ textAlign: { xs: 'center', md: 'start' }, pl: { xs: 0, md: 1 } }}
    >{ groupName }</Typography>
    <Box p={1} pl={1}>
      <Grid container pr={3}
          sx={{ justifyContent: { xs: 'center', md: 'start' }, pr: { xs: 0, md: 3 } }}
      >
        { _skills.map( ( skill ) => (
          <div key={`skills-item-${ skill.id }`}>
            <Grid item>
              <Box p='4px' m='4px' backgroundColor='#e2e2e2'>
                <SkillItem _skill={ skill }/>
              </Box>
            </Grid>
          </div>
        ) ) }
      </Grid>
      
    </Box>
    </>
  );
  return <>
    <Box max-width="lg" pb={3}>
      <Typography variant="h6" textAlign='start' borderBottom='1px solid black' mr={3}
          sx={{ textAlign: { xs: 'center', md: 'start' }, mr: { xs: 0, md: 3 } }}
      >SKILLS</Typography>
      { Object.entries( skills ).map( ( [ key, value ] ) => (
        <div key={`skills-group-${ key }`}>
          <SkillGroup groupName={ key } _skills={ value }/>
        </div>
      ) ) }
    </Box>
  </>;
}

export default WResSkills;