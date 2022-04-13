import * as React from 'react';
import { makeStyles, AppBar, Box, Toolbar, IconButton, Typography, Menu ,Container, Avatar,  Button, Tooltip, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../static/images/logo.jpeg";
import Background from "../../static/images/portada.png";
import { Link } from "react-router-dom";

const pages = ['Home', 'Invertir', 'Como Funciona', 'Sobre Nosotros', 'Blog', 'Ayuda'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const urls = ['/', '/invest', 'Account', 'Dashboard', 'Logout', "Logout"];




const useStyles = makeStyles({
    logo: {
        maxWidth: 150,
        marginRight: '10px'
      },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "30%",
        backgroundImage: `url(${Background})`
        // border-bottom: 5px solid black;
        // box-shadow: 0px 31px 9px 0px rgba(67, 66, 64, 0.31);
        // justify-content: space-between;
      },
      text: {
        color: "#FFFFFF"
      }
  });

const ResponsiveAppBar = () => {
    const classes = useStyles();

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

  return (
    <AppBar className={classes.header} position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
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
                  <Typography className={classes.text}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={logo} alt="Kitty Katty!" className={classes.logo}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link to={urls[index]} className={classes.link}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;