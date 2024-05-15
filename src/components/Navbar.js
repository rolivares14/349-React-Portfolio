// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink  } from 'react-scroll';


function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Robert's Portfolio
        </Typography>
        <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Home</Button></ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Skills</Button></ScrollLink>
        <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Projects</Button></ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Contact Me</Button></ScrollLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;