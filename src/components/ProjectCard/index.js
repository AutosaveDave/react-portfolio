import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, Typography, Stack, IconButton, Tooltip, Zoom, Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
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

  const iconSX = {color: 'info.main', '&:hover': { color:'error.main'} };
  const openInNewTab = (repoLink) => {
    const newWindow = window.open(repoLink, '_blank', 'noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null;
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
          height: { xs: '40vh', md: '30vh', lg: '25vh' },
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

                <Box variant='projectDescr' backgroundColor='transparent' width={1} px={0} m={0} 
                  sx= {{
                    display:'flex', 
                    boxSizing: 'border-box', 
                    justifyContent:'space-between', 
                    alignItems:'flex-end'
                  }}
                >
                  <Tooltip
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 300 }}
                    title='View Project'
                    placement='top'
                    
                    PopperProps={{
                      modifiers: [
                        {
                          name: 'offset',
                          options: {
                            offset: [0,-16],
                          },
                        },
                      ],
                    }}
                    m={0}
                    arrow
                  >
                    <IconButton color='info' onClick={ () => openInNewTab(link) } sx={iconSX}>
                      <PreviewIcon fontSize='large' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 300 }}
                    title='View on GitHub'
                    placement='top'
                    PopperProps={{
                      modifiers: [
                        {
                          name: 'offset',
                          options: {
                            offset: [0,-16],
                          },
                        },
                      ],
                    }}
                    m={0}
                    arrow
                  >
                    <IconButton color='info' onClick={ () => openInNewTab(repo) } sx={iconSX}>
                      <GitHubIcon fontSize='large' />
                    </IconButton>
                  </Tooltip>
                </Box>
            </>
          }
        </Stack>
      </Paper>
    </>
  );
}