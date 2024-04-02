import CreateIcon from '@mui/icons-material/Create';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import DrawIcon from '@mui/icons-material/Draw';

    export const iconMap: { [key: string]: JSX.Element } = {
        Trabajos: <CreateIcon />,
        'Sobre Mi': <AssignmentIndIcon />,
        'Cursos Realizados': <AutoStoriesIcon />,
        WhatsApp: <WhatsAppIcon/>,
        Linkedin: <LinkedInIcon/>,
        Instagram: <InstagramIcon/>,
        Facebook: <FacebookIcon/>,
        Habilidades: <DrawIcon/>,

      };
    
    export const drawerItems = [
        { label: 'Sobre Mi', path: '/sobre-mi', className: 'drawerItem' },
        { label: 'Trabajos', path: '/proyectos', className: 'drawerItem' },
        { label: 'Cursos Realizados', path: '/cursos', className: 'drawerItem' }, // Puedes cambiar la ruta según tus necesidades
        { label: 'Habilidades', path: '/habilidades', className: 'drawerItem' },
      ];
    
      export const drawerItemsContactos = [
        { label: 'WhatsApp', path: 'https://api.whatsapp.com/send?phone=543329305304', className: 'drawerItem' },
        { label: 'Linkedin', path: 'https://www.linkedin.com/in/facundo-mangin-65359a268/',  className: 'drawerItem' },
        { label: 'Instagram', path: 'https://www.instagram.com/facumangin/', className: 'drawerItem' },
        { label: 'Facebook', path: 'https://www.facebook.com/facundo.mangin/', className: 'drawerItem' },
      ];
    
      
     
