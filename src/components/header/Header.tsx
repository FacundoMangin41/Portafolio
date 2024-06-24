import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BotonHamburguesa from './BotonHamburguesa';
import { Link, useLocation } from 'react-router-dom';

import { styled, alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    primary: {
      main: '#407c7c',
    },
  },
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

export default function ButtonAppBar() {
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsNavVisible(!isNavVisible);
    setAnchorEl(null); // Cerrar el menú móvil cuando se toglea
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: isNavVisible ? 0 : -64, transition: 'top 0.6s' }}>
        <Toolbar className="sideBar">
          <div className="botonHamburguesaCelular">
            <div className="botonHamburguesaSidebar">
              <BotonHamburguesa />
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '600' }}>
              PORTAFOLIO
            </Typography>
          </div>

          <div className="sidebarPc">
            <nav className="buscadoresSidebarPc" data-navbar>

              <div className={`portafolioSidebarPc ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="buscadoresSidebarPc-link">PORTAFOLIO</Link>
              </div>

              <div className={`buscadoresSidebarPc-link ${location.pathname === '/sobre-mi' ? 'active' : ''}`}>
                <Link to="/sobre-mi" className="buscadoresSidebarPc-link">Sobre Mi</Link>
              </div>

              <div className={`buscadoresSidebarPc-link ${location.pathname === '/habilidades' ? 'active' : ''}`}>
                <Link to="/habilidades" className="buscadoresSidebarPc-link">Habilidades</Link>
              </div>

              <div className={`buscadoresSidebarPc-link ${location.pathname === '/proyectos' ? 'active' : ''}`}>
                <Link to="/proyectos" className="buscadoresSidebarPc-link">Proyectos</Link>
              </div>

              <div className={`buscadoresSidebarPc-link ${location.pathname === '/experiencia-laboral' ? 'active' : ''}`}>
                <Link to="/experiencia-laboral" className="buscadoresSidebarPc-link">Exp Laboral</Link>
              </div>

              <div className={`buscadoresSidebarPc-link ${location.pathname === '/cursos' ? 'active' : ''}`}>
                <Link to="/cursos" className="buscadoresSidebarPc-link">Certificaciones</Link>
              </div>

              <ThemeProvider theme={theme}>
                <div className={`buscadoresSidebarPc-link ${location.pathname === '/redes-sociales' ? 'active' : ''}`}>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Redes Sociales
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <WhatsAppIcon />
                      <Link to="https://api.whatsapp.com/send?phone=543329305304" className="buscadoresSidebarPc-link">WhatsApp</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <LinkedInIcon />
                      <Link to="https://www.linkedin.com/in/facundo-mangin-65359a268/" className="buscadoresSidebarPc-link">Linkedin</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <InstagramIcon />
                      <Link to="https://www.instagram.com/facumangin/" className="buscadoresSidebarPc-link">Instagram</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <FacebookIcon />
                      <Link to="https://www.facebook.com/facundo.mangin/" className="buscadoresSidebarPc-link">Facebook</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <GitHubIcon />
                      <Link to="https://github.com/FacundoMangin41" className="buscadoresSidebarPc-link">GitHub</Link>
                    </MenuItem>
                  </StyledMenu>
                </div>
              </ThemeProvider>

            </nav>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '48px' }}></div>
    </Box>
  );
}
