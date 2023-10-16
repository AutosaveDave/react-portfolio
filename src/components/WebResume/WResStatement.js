import React from "react";
import { Box, Typography } from "@mui/material";

const WResStatement = ( { statement } ) => {
  return <>
    <Typography variant="h6" textAlign='start' borderBottom='1px solid black'
        ml={0} mb={2}
        sx={{ textAlign: { xs: 'center', md: 'start' } }}
    >OBJECTIVE</Typography>
    <Box textAlign='justify' alignSelf='start' pl={1} pr={2} >
        <Typography variant='p' pr={2}>{ statement }</Typography>
    </Box>
  </>;
}

export default WResStatement;