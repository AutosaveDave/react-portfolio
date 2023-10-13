import React from "react";
import { Box, Typography } from "@mui/material";

const WResStatement = ( { statement } ) => {
  return <>
    <Typography variant="h6" textAlign='end' borderBottom='1px solid black' ml={1} mb={2}>OBJECTIVE</Typography>
    <Box textAlign='justify' alignSelf='end' pl={3} sx={{ width: { xs:'96%', md:'80%', lg:'75%', xl:'66%' } }}>
        <Typography variant='p' pr={2}>{ statement }</Typography>
    </Box>
  </>;
}

export default WResStatement;