import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const WResExperience = ( { experience } ) => {
  const ExpItem = ( { _exp } ) => (
    <>
      {  }
    </>
  );
  return ( <>
    <Box max-width="lg">
      { experience.map( ( exp, i ) => (
        <div key={`exp-item-${ i }`}>

        </div>
      ) ) }
    </Box>
  </> );
}

export default WResExperience;