import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const WResEducation = ( { education } ) => {
  const EducationItem = ( { _eduItem } ) => ( <>
    <Box my={2}>
      <Stack direction='row' alignItems='center'>
        <Box height='2.5em' width='2.5em' minWidth='2.5em' minHeight='2.5em' 
            textAlign='center' pr={1}
            sx={{ display: { xs: 'none', md:'inline-block' } }}
        >
          { _eduItem.seal }
        </Box>
        <Box flexGrow={11}>
          <Stack direction="row" justifyContent="space-between" alignItems={'baseline'}>
            <Typography variant="body1" textAlign='start' pr={2}>{ _eduItem.school }</Typography>
            <Typography variant="p" textAlign='end'>{ _eduItem.location }</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems={'baseline'}>
            <Typography variant="p" textAlign='start' pr={2}>{ _eduItem.degree }</Typography>
            <Typography variant="p" textAlign='end' pl={2}>{ _eduItem.date }</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  </>);
  return <>
    <Typography variant="h6" textAlign='start' borderBottom='1px solid black' ml={0} mt={2} mb={1}>EDUCATION</Typography>
    <Box ml={0} pl={1} pr={1}>
      { education.map( ( eduItem, i ) => (
        <div key={`education-${ i }`}>
          <EducationItem _eduItem={ eduItem }/>
        </div>
      ) ) }
    </Box>
  </>;
}

export default WResEducation;