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

import './header.css'

import perfil from "../../assets/perfil.jpg";

import { Link } from 'react-router-dom';
import { drawerItems } from "./RedireccionesLayout";
import { iconMap } from "./RedireccionesLayout";


interface DrawerItem {
  label: string;
  path: string;
}

interface Props {
  drawerItemsReportes: DrawerItem[]; // Suponiendo que drawerItemsReportes es una matriz de objetos con propiedades label y path
  drawerItems: DrawerItem[]; // Suponiendo que drawerItems es una matriz de objetos con propiedades label y path
  drawerItemsRelevamientos: DrawerItem[]; // Suponiendo que drawerItemsRelevamientos es una matriz de objetos con propiedades label y path
  drawerItemsRentas: DrawerItem[]; // Suponiendo que drawerItemsRentas es una matriz de objetos con propiedades label y path
  drawerItemsAyuda: DrawerItem[]; // Suponiendo que drawerItemsAyuda es una matriz de objetos con propiedades label y path
  iconMap: { [key: string]: React.ReactNode }; // Suponiendo que iconMap es un objeto que asigna etiquetas a iconos React
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
          <img src={perfil} alt="" />
          <h1>Facundo <br />Mangin</h1>
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
