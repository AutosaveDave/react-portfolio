import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import { resumeData } from "../../utils/data";
import WResName from "./WResName";
import WResStatement from "./WResStatement";
import WResContact from "./WResContact";
import WResEducation from "./WResEducation";
import WResSkills from "./WResSkills";
import WResExperience from "./WResExperience";

const WebResume = () => {
    return ( <>
      <Box position='absolute' top={0} height='4em' zIndex={2}
        sx={{ left: { xs:'10%', sm:'15%', md:'20%', lg:'25%' }, 
            right:  { xs:'10%', sm:'15%', md:'20%', lg:'25%' }, }}
      >
        <WResName _name={ resumeData.fullName } _tagline={ resumeData.tagline }/>
      </Box>
      <Box height='100%' width='100%'>
        <Grid container height='100%' width='100%' 
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }} 
        >
          <Grid item xs={12} md={4} lg={3}>
            <Box height='100%' backgroundColor='#cccccc' pb={0}
                sx={{ pr: { xs:1, sm:1 }, pl: { xs:1, sm:1, md:2 } }}
            >
              <Box height='15em' />
              <Stack spacing={2}>
                <WResContact contact={ resumeData.contact }/>
                <WResSkills skills={ resumeData.skills }/>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Box height='100%' pl={3} pr={2} pb={0}
              sx={{ pr: { xs:1, sm:1, md:2 }, pl: { xs:1, sm:1, md:3 } }}
            >
              <Box sx={{ height: { xs: '1.5em', md:'15em' } }} />
              <Stack>
                <WResStatement statement={ resumeData.statement }/>
                <WResEducation education={ resumeData.education }/>
                <WResExperience experience={ resumeData.experience }/>
              </Stack>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </> );
  }
  
  export default WebResume;