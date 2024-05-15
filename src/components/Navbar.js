import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink  } from 'react-scroll';


function Navbar() {
  return (
    <AppBar position="fixed"> {/* Fixed position app bar */}
      <Toolbar> {/* Toolbar */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> {/* Title */}
          Robert's Portfolio
        </Typography>
        <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Home</Button></ScrollLink> {/* Home button */}
        <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Skills</Button></ScrollLink> {/* Skills button */}
        <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Projects</Button></ScrollLink> {/* Projects button */}
        <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}><Button color="inherit">Contact Me</Button></ScrollLink> {/* Contact Me button */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;