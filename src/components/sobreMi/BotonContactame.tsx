import React from 'react';
import Button from '@mui/material/Button';
import './sobreMi.css'
import EmailIcon from '@mui/icons-material/Email';

interface EmailButtonProps {
    subject: string;
    body: string;
  }
  
  const BotonContactame: React.FC<EmailButtonProps> = ({ subject, body }) => {
    const emailAddress = 'facundo.mangin@gmail.com';
  
    const handleButtonClick = () => {
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };
  
    return (
      <Button variant="contained" className='botonSobreMi' onClick={handleButtonClick}>
        <EmailIcon/>Contacto
      </Button>
    );
  };

export default BotonContactame;
