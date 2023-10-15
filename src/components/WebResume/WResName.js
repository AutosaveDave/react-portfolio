import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const WResName = ( { _name, _tagline } ) => {
  return <>
    <Box position='absolute' top={0} left={0} right={0} zIndex={2} 
        justifyContent='center'
    >
      <div style={{ height:'6.5em' }} />
      <Box border='2px solid black' backgroundColor='white' color='black' 
          height='8em'  alignContent='center'
          my={3} py={2} mx={2} overflow='hidden'
      >
        <Stack gap={1} justifyContent='center' height='100%'>
          <Typography variant='h3' noWrap={true} textOverflow='clip'
              sx={{ fontSize: { xs:'2em', sm:'3em', md:'4em' } }}
          >{ _name }</Typography>
          <Typography variant='h6' noWrap={true} textOverflow='clip'>{ _tagline }</Typography>
        </Stack>
      </Box>
    </Box>
  </>;
}

export default WResName;