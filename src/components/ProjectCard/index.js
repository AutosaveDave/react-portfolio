import * as React from 'react';
import { useState } from 'react';
import { Grid, Box, Paper, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';

export default function ProjectCard( { project } ) {

  const { name, description, link, repo, imagePath } = project;
  const [show, setShow] = useState(false);
  return (
    <>
      <Button 
        variant='project' 
        fullWidth 
        m={0}
        p={0}
        sx={{minHeight:'160px',
          backgroundImage: imagePath
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <Box backgroundColor='background.default' px={2} m={0} sx={{display: 'flex'}}>
            <Typography variant='projectTitle'>
              {name}
            </Typography>
        </Box>
        { show && 
          
          <Box variant='projectTitle' backgroundColor='transparent' px={2} m={0} sx={{display: 'flex'}}>
            <Typography variant='projectDescr'>
              {description}
            </Typography>
          </Box>
        }
      </Button>
    </>
  );
}