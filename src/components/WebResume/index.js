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
      <Box position='absolute' top={0} left='20%' right='20%' height='4em' zIndex={2}>
        <WResName _name={ resumeData.fullName } _tagline={ resumeData.tagline }/>
      </Box>
      <Box max-width="lg" height='100%' >
        <Grid container height='100%' width='100%' >
          <Grid item xs={5} md={4} lg={3}>
            <Box height='100%' backgroundColor='#cccccc' pr={1} pl={2} pb={0}>
              <Box height='15em' />
              <Stack spacing={2}>
                <WResContact contact={ resumeData.contact }/>
                <WResSkills skills={ resumeData.skills }/>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={7} md={8} lg={9}>
            <Box height='100%' pl={3} pr={2} pb={0}>
              <Box height='15em' />
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