import CreateIcon from '@mui/icons-material/Create';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

    export const iconMap: { [key: string]: JSX.Element } = {
        Trabajos: <CreateIcon />,
        'Sobre Mi': <AssignmentIndIcon />,
        'Cursos Realizados': <AutoStoriesIcon />,

      };
    
    export const drawerItems = [
        { label: 'Sobre Mi', path: '/sobre-mi', className: 'drawerItem' },
        { label: 'Trabajos', path: '/proyectos', className: 'drawerItem' },
        { label: 'Cursos Realizados', path: '/', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
      ];
    
     
