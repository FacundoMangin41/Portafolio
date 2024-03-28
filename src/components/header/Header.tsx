
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BotonHamburguesa from "./BotonHamburguesa";
import './header.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='sideBar'>
            <BotonHamburguesa/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'600' }}>
            PORTAFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}