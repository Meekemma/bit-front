import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Import AuthContext




const pages = ['Home', 'company', 'Markets', 'About-us', 'Account-Type', 'Partners', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const pageRoutes = {
  Home: '/',
  company: '/company',
  Markets: '/markets',
  'About-us': '/about-us',
  'Account-Type': '/account-type',
  Partners: '/partners',
  Contact: '/contact',
};

const CustomAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext); // Use AuthContext

  // Check if tokens are in localStorage
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const isAuthenticated = accessToken && refreshToken; // Boolean flag for auth status

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    const route = pageRoutes[page];
    if (route) {
      navigate(route);
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting.toLowerCase() !== 'logout') {
      navigate(`/${setting.toLowerCase().replace(/ /g, '-')}`);
    } else {
      logoutUser(); // Trigger logout
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1D2B53' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOBBYGRAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              onClose={() => handleCloseNavMenu('')}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOBBYGRAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
  {isAuthenticated ? (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={() => handleCloseUserMenu('')}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  ) : (
    <>
      <Button
        
        onClick={handleLoginClick}
        sx={{
          backgroundColor: '#4A4A4A',
          color: 'white',
          marginRight: 2,
          borderRadius: '10px', // Adding border-radius
          '&:hover': {
            backgroundColor: '#4A4A4A', // Hover effect
            color: 'black', // Changing text color on hover
          },
        }}
      >
        Login
      </Button>
      <Button
        
        onClick={handleSignupClick}
        sx={{
          backgroundColor: '#4A4A4A',
          color: 'white',
          borderRadius: '10px', // Adding border-radius
          '&:hover': {
            backgroundColor: '#4A4A4A', // Hover effect
            color: 'black', // Changing text color on hover
          },
        }}
      >
        Signup
      </Button>
    </>
  )}
</Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
