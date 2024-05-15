import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline /> {/* CSS Reset */}
      <Navbar /> {/* Navbar component */}
      <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box id="home" sx={{ my: 8, py: 3, backgroundColor: 'background.paper' }}>
          <Introduction /> {/* Introduction component */}
        </Box>
        <Box id="skills" sx={{ my: 4, py: 3, backgroundColor: 'background.default' }}>
          <Skills /> {/* Skills component */}
        </Box>
        <Box id="projects" sx={{ my: 6, py: 3, backgroundColor: 'background.paper' }}>
          <Projects /> {/* Projects component */}
        </Box>
        <Box id="contact" sx={{ my: 6, py: 3, backgroundColor: 'background.default' }}>
          <ContactForm /> {/* ContactForm component */}
        </Box>
      </Container>
      <Footer /> {/* Footer component */}
    </Box>
  );
}

export default App;
