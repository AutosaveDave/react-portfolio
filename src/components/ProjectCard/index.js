import * as React from 'react';
import { useState } from 'react';
import { Container, Box, Paper, Typography, Stack, IconButton, Tooltip, Zoom, Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import TechList from './TechList';

export default function ProjectCard( { project } ) {

  const { name, description, link, repo, imagePath, tech } = project;
  const [show, setShow] = useState(false);

  const titleTextVariant = (showDescr) => {
    if(showDescr) {
      return 'projectTitleHover';
    } else {
      return 'projectTitle';
    }
  }

  const iconSX = {color: 'primary.light', bgcolor: 'secondary.main', padding: '4px', 
                  alignContent: 'center', justifyContent: 'center', mb: 1, mr: 2, ml: 2,
                  '&:hover': { color: 'secondary.contrastText', bgcolor: 'secondary.light', } };
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
        m={0}
        p={0}
        sx={{
          height:{xs:'22rem',md:'24rem',lg:'20rem'},
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
          alignItems='stretch'
          justifyContent='space-between'
          textAlign='left'
          sx={{ 
            minHeight:'100%', 
          }}
        >
          <Container variant={ titleTextVariant( show ) }>
            <Typography textAlign='center' variant='h6' m={0} px={1} py={0}>
              {name}
            </Typography>
          </Container>

          { show && 
            <>
              <Box variant='projectTitle' backgroundColor='transparent' 
                width={1} 
                //height={'100%'} 
                px={2} 
                m={0} 
                boxSizing= 'border-box'
              >
                <Typography color='primary.contrastText'>
                  {description}
                </Typography>
              </Box>

              <TechList tech={tech} name={name}/>

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
                  disableInteractive
                  PopperProps={{
                    variant: 'iconBtn',
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0,-8],
                        },
                      },
                    ],
                  }}
                  m={0}
                  arrow
                >
                  <IconButton onClick={ () => openInNewTab(link) } sx={iconSX}>
                    <PreviewIcon fontSize='large' />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 300 }}
                  title='View on GitHub'
                  placement='top'
                  disableInteractive
                  PopperProps={{
                    variant: 'iconBtn',
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0,-8],
                        },
                      },
                    ],
                  }}
                  m={0}
                  arrow
                >
                  <IconButton onClick={ () => openInNewTab(repo) } sx={iconSX}>
                    <GitHubIcon fontSize='large' m={0} p={0} />
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