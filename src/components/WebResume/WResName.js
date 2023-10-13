import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const WResName = ( { _name, _tagline } ) => {
  return <>
    <Box position='absolute' top={0} left={0} right={0} zIndex={2} justifyContent='center'>
      <div style={{ height:'7em' }} />
      <Box border='2px solid black' backgroundColor='text.primary' color='black' marginY={3} padding={4}>
        <Stack gap={1}>
          <Typography variant='h3'>{ _name }</Typography>
          <Typography variant='h6'>{ _tagline }</Typography>
        </Stack>
      </Box>
    </Box>
  </>;
}

export default WResName;