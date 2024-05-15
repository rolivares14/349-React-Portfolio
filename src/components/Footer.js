// Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto', width: '100%' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        Connect with me on{' '}
        <Link href="https://www.linkedin.com/in/robert-olivares-1746a4256/" color="inherit" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        {' '}and{' '}
        <Link href="https://github.com/rolivares14" color="inherit" target="_blank" rel="noopener noreferrer">GitHub</Link>.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Robert Olivares
      </Typography>
    </Box>
  );
}

export default Footer;
