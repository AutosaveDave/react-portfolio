import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard( { project } ) {

  const { name, description, link, repo, imagePath } = project;
  const [show, setShow] = useState(false);
  
  const titleTextSX = (showDescr) => {
    if(showDescr) {
      return { color:'primary.contrastText', backgroundColor: 'primary.main' };
    } else {
      return { color:'text.main', backgroundColor: 'background.default' };
    }
  }

  return (
    <>
      <Paper 
        variant='project' 
        //fullWidth 
        m={0}
        p={0}
        sx={{
          height:{xs:'40vh',md:'30vh',lg:'25vh'},
          backgroundImage: imagePath,
          flexWrap: 'nowrap',
          position: 'static',
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <Stack 
          display='flex'
          width={1}
          
          direction='column'
          spacing={1}
          alignItems= {'stretch'}
          justifyContent= {'space-between'}
          textAlign={'left'}
          sx={{ 
            minHeight:'100%', 
          }}
        >
          
            <Typography textAlign='center' variant='h6' m={0} px={1} py={0} sx={titleTextSX(show)}>
              {name}
            </Typography>
          
          { show && 
            <>
                <Box variant='projectTitle' backgroundColor='transparent' 
                  width={1} 
                  height={'100%'} 
                  px={2} 
                  m={0} 
                  boxSizing= 'border-box'
                >
                  <Typography color='primary.contrastText'>
                    {description}
                  </Typography>
                </Box>

                <Box variant='projectDescr' backgroundColor='transparent' width={1} px={2} m={0} 
                  sx= {{
                    display:'flex', 
                    boxSizing: 'border-box', 
                    justifyContent:'flex-end', 
                    alignItems:'flex-end'

                  }}
                >
                  <IconButton color='info'>
                    <GitHubIcon fontSize='inherit' />
                  </IconButton>
                </Box>
              
            </>
          }
        </Stack>
      </Paper>
    </>
  );
}