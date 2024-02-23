import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrentuser, logout } from '../Redux/Action';
import AjoutProduct from './AjoutProduct';
import { FaCog } from 'react-icons/fa';




const pages = [{element:'Register',link:"/Registre"}, {element:'Login',link:"/login"}, {element:'home',link:"/"}];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch=useDispatch()
  React.useEffect(() => {
    
  dispatch(getcurrentuser())
  
  }, [])
  const user=useSelector(state=>state.userReducer.user)
  console.log(user)
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
const cart=useSelector(state=>state.CartReducer)

  return (
    <AppBar position="static"sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
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
              {user?.name?null:pages.map((page) => (
                <MenuItem key={page.element} onClick={handleCloseNavMenu}>
                  <a href={page.link}  >{page.element}</a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user?.name?null:pages.map((page) => (
              <Button
                key={page.element}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link to={page.link}  >{page.element}</Link>
              </Button>
              




            ))}
          </Box>
          <Typography
             variant="h6"
             noWrap
             component="a"
             href="/"
             sx={{
               mr: 2,
               display: { xs: 'none', md: 'flex' },
               fontFamily: 'monospace',
               fontWeight: 700,
               letterSpacing: '.3rem',
               color: 'black',
               textDecoration: 'none',
               justifyContent: 'center',
               marginRight:40, // Center the text horizontally
               flexGrow: 1, // Allow the text to take up available space
             }}
           
          >
            Tun_shop
          </Typography>
          
 



          <Box sx={{ color: 'black',marginRight:'20px' }}>
          <NavLink to='/'>
          <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            </Box>


          {user?.name?<Box sx={{ color: 'black',marginRight:'20px' }}>
          <NavLink to='/Userprofile'>
          <i class="fa-regular fa-user"></i>
            </NavLink>
 

          </Box>:null}
          
          <Box sx={{ color: 'black' }}>
         
          <NavLink to='/Cart'>
            <i class="fa-solid fa-cart-shopping"></i>{cart.length}
            </NavLink>
          </Box>
{"    "}
          {user?.name?<Box sx={{ color: 'black',marginLeft:'10px' }}>
         
          <NavLink to='/login' onClick={()=>dispatch(logout())}>
          <i class="fa-solid fa-right-from-bracket"></i>
            </NavLink>
          </Box>:null}
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;