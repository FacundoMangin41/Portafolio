import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BotonHamburguesa from './BotonHamburguesa';
import './header.css';

export default function ButtonAppBar() {
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsNavVisible(!isMobileMenuOpen); // Ocultar la navegación si se abre el menú móvil
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: isNavVisible ? 0 : -64, transition: 'top 0.6s' }}>
        <Toolbar className="sideBar">
        <BotonHamburguesa/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '600' }}>
            PORTAFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '48px' }}>
      </div>
    </Box>
  );
}
