import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkIcon from '@mui/icons-material/Work';
import NearMeIcon from '@mui/icons-material/NearMe';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

    export const iconMap: { [key: string]: JSX.Element } = {
        Areas: <WorkIcon />,
        Tareas: <ListAltRoundedIcon />,
        'Cargar OT': <NoteAddIcon />,
        'Listado OT': <AutoStoriesIcon />,
        Estadisticas: <LeaderboardRoundedIcon />,
        Usuarios: <ContactPageIcon />,
        Reportes: <SupportAgentIcon />,
        Computadoras: <DesktopWindowsRoundedIcon />,
        Impresoras: <LocalPrintshopRoundedIcon />,
        Rentas: <NearMeIcon />,
        Ayuda: <HelpCenterIcon/>,

      };
    
    export const drawerItems = [
        { label: 'Areas', path: '/ListaDeAreas', className: 'drawerItem' },
        { label: 'Tareas', path: '/listaTarea', className: 'drawerItem' },
        { label: 'Usuarios', path: '/listaDeUsuarios', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
        { label: 'Listado OT', path: '/listadoOrdenTrabajo', className: 'drawerItem' },
        { label: 'Cargar OT', path: '/ordenDeTrabajo', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
        { label: 'Estadisticas', path: '/estadisticas', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
      ];
    
    export const drawerItemsReportes = [
        { label: 'Reportes', path: '/reportes', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
      ];
    
    export const drawerItemsRentas = [
        { label: 'Rentas', path: '/cargaDatosEfimuni', className: 'drawerItem' },
      ];
    
    export const drawerItemsAyuda = [
      { label: 'Ayuda', path: '/', className: 'drawerItem' },
    ];
     
