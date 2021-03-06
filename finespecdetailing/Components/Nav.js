import * as React from 'react';
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
import Image from 'next/image'
// import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import styles from '../Styles/Nav.module.css';

import fineLogo from '../public/fineLogo2.png';

// import Image from 'next/image'
// import { Router } from 'next/router';



const ResponsiveAppBar = () => {
  const { data: session } = useSession()
  const router = useRouter()


  React.useEffect(() => {
  }) 
  const pages = ['Services', 'Contact'];
  const settings = session ? ['Profile', 'bookings'] : []
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePicClick = () => {
    router.push('/')
  }

  return (
    <AppBar sx={{background: '#121212'}} position="static">
      <Container sx={{background: '#121212'}} maxWidth="lg">
        <Toolbar disableGutters>
          <Container component="div" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <Image src={fineLogo} width={150} height={30} layout="fixed" onClick={handlePicClick} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', paddingLeft: '30px'},
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}          
          >
            
          </Typography>
          </Container>

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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className={styles.Font}><Link href={`/${page}`} underline="none">{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Container component="div" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1  }} >
            <Image src={fineLogo} width={150} height={30} layout="fixed" onClick={handlePicClick}  />
          </Container>
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={styles.Font}
              >
                <Link href={`/${page}`} underline="none" >{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session ? session.user.email : null} src="/static/images/avatar/2.jpg" />
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link href={`/${setting}`} underline="none" sx={{textTransform: 'capitalize'}} className={styles.Font}>{setting}</Link>
                </MenuItem>
              ))}
              {session ? (
                              <Button onClick={() => signOut()} variant="outlined" sx={{ my: 1, mx: 1.5 }} className={styles.Font}>
                                Logout
                              </Button>
                            ) : 
                            (
                              <Button onClick={() => signIn()} variant="outlined" sx={{ my: 1, mx: 1.5 }} className={styles.Font}>
                                Login
                              </Button>
                  )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;