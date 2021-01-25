import React from 'react';
import Box from '@material-ui/core/Box';

import './Footer.scss';

const Footer = () => {
  return (
    <Box className='footer'>Chad Parker &copy;{new Date().getFullYear()}</Box>
  );
};

export default Footer;
