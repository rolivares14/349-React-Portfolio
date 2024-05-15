import React from 'react';
import { Box, Chip, Typography } from '@mui/material';

function Skills() { // Array of skills
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'C++', 'C', 'Assembly'];
 
  return (
    <Box sx={{ maxWidth: 960, margin: 'auto', textAlign: 'center'}}> {/* Skills container */}
      <Typography variant="h4" color="secondary" gutterBottom>Professional Skills</Typography> {/* Title */}
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" sx={{ p: 2 }}> {/* Box for skills */}
        {skills.map(skill => (
          <Chip label={skill} key={skill} color="primary" sx={{ m: 1, width: '23%', height: 48, fontSize: '1rem', 
          '&:hover': { transform: 'scale(1.1)', backgroundColor: '#03284A', boxShadow: '0 3px 5px 2px rgba(0,0,0,0.3)' } }} /> // Skill chip
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
