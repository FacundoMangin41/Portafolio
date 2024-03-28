import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';

import './header.css'

import perfil from "../../assets/perfil.jpg";

import { Link } from 'react-router-dom';
import { drawerItems, drawerItemsContactos } from "./RedireccionesLayout";
import { iconMap } from "./RedireccionesLayout";


interface DrawerItem {
  label: string;
  path: string;
}

interface Props {
  drawerItemsContactos: DrawerItem[];
  drawerItems: DrawerItem[];
  iconMap: { [key: string]: React.ReactNode };
}


function handleClick() {
  try {
    const link = document.createElement('a');
    link.href = archivoPDF;
    link.setAttribute('download', 'CV Facundo Mangin - Analista en Informatica 2024.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error('Error al descargar el archivo PDF:', error);
  }
}





export default function BotonHamburguesa() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className="imagenPerfil">
          <a href="/">
            <img src={perfil} alt="" />
          </a>
          <h1>Facundo <br />Mangin</h1>
        </div>

        <div className="layoutsidebar">
          <div className="botonDescargarPdfSidebar" onClick={handleClick}>
            <p><PictureAsPdfIcon />Descargar CV</p>
          </div>
        </div>

        <Divider className="divider" />

        <div className="layoutsidebar">
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link className="drawerItem" to={item.path} >
                <ListItemButton className="navegadorSidebar">
                  <ListItemIcon sx={{ color: "var(--letrasSidebar)" }}>{iconMap[item.label]}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{ color: "var(--letrasSidebar)" }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </div>

        <Divider className="divider" />

        <div className="layoutsidebar">
          {drawerItemsContactos.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link className="drawerItem" to={item.path} target='_blank'>
                <ListItemButton className="navegadorSidebar">
                  <ListItemIcon sx={{ color: "var(--letrasSidebar)" }}>{iconMap[item.label]}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{ color: "var(--letrasSidebar)" }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </div>

        <Divider className="divider" />

      </List>



    </Box>
  );

  return (
    <div className='BotonHamburguesa'>
      <Button className='BotonHamburguesacolor' onClick={toggleDrawer(true)}> <MenuIcon sx={{ color: 'black', fontSize: '1.5rem' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
