import React from "react";
import { Box, Typography, Stack } from "@mui/material";
//import CarnegieMellonSeal from "../../utils/icons/CarnegieMellonSeal";

const WResEducation = ( { education } ) => {
  const EducationItem = ( { _eduItem } ) => ( <>
    <Box marginY={2}>
      <Stack direction="row" justifyContent="space-between" alignItems={'baseline'}>
        <Typography variant="body1" textAlign='start' pr={2}>{ _eduItem.school }</Typography>
        <Typography variant="p" textAlign='end'>{ _eduItem.location }</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems={'baseline'}>
        <Typography variant="p" textAlign='start' pr={2}>{ _eduItem.degree }</Typography>
        <Typography variant="p" textAlign='end' pl={2}>{ _eduItem.date }</Typography>
      </Stack>
    </Box>
  </>);
  return <>
    <Typography variant="h6" textAlign='end' borderBottom='1px solid black' ml={1} mt={2} mb={1}>EDUCATION</Typography>
    <Box ml={1} pl={1} pr={1}>
      { education.map( ( eduItem, i ) => (
        <div key={`education-${ i }`}>
          <EducationItem _eduItem={ eduItem }/>
        </div>
      ) ) }
    </Box>
  </>;
}

export default WResEducation;