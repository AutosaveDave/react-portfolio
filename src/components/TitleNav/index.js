import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WalrusLogo from '../../utils/icons/WalrusLogo';

function TitleNavBar(props) {

  const {
    page = [],
    setCurrentPage,
    currentPage,
  } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);

  useEffect( () => {
    document.title = currentPage.name;
  }, [currentPage]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuClick = (Page) => {
    handleCloseNavMenu();
    setCurrentPage(Page);
  };

  return (
    <AppBar position="fixed" sx={{ mx: 0, px: 0, }}>
      <Container sx={{ mx: 0, px: 0, width:1 }} style={{ margin: 0, padding: 0 }}>
        <Toolbar disableGutters sx={{ mx: 0, px: 0 }}>
            <WalrusLogo/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://autosavedave.github.io/react-portfolio/"
            sx={{
              mr: 2,
              ml: 1,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AutosaveDave
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{
                display: { xs: 'block', md: 'none' }, 
              }}
            >
              { page.map( (Page) => (
                <MenuItem key={ 'navDropItem-' + Page.name } sx={{ p: 0, m: 0 }}>
                  <Button variant="navDropdown"
                    key={ 'navDropBtn-' + Page.name }
                    onClick={ () => handleNavMenuClick(Page) }
                  >
                    <Typography key={ 'navDropBtnText-' + Page.name } 
                        textAlign="center">{Page.name}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'end',
            }}
          >
            AutosaveDave
          </Typography>
          <Box sx={{ alignSelf:'stretch', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {page.map((Page) => (
              <Button
                key={ 'navBtn' + Page.name }
                onClick={() => setCurrentPage(Page) }
                variant='nav'
              >
                {Page.name}
              </Button>
            ))}
          </Box>
          <WalrusLogo hMirror={true} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TitleNavBar;
