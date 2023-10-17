import React from "react";
import { Box, Typography, Stack, Button, ButtonGroup } from "@mui/material";

const WResButtons = ( { _name, _tagline } ) => {
  return <>
    <Box position='fixed' bottom='1.5em' left={'2em'} right={'2em'} zIndex={2} textAlign='center'>
        <ButtonGroup variant='resume' color='error' >
            <Button>View pdf</Button>
            <Button>Download pdf</Button>
        </ButtonGroup>    
    </Box>
  </>;
}

export default WResButtons;