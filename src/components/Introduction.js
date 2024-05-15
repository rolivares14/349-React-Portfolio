import React from 'react';
import { Typography, Box } from '@mui/material';

function Introduction() {
  return (
    <Box sx={{ textAlign: 'center', my: 6, px: 5, py: 3 }}>
      <Typography variant="h4" component="h1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
        Hi, I'm Robert Olivares, a Computer Science student at California State University, Fullerton.
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
        I specialize in backend development, with a strong passion for building efficient and scalable applications.
        My primary programming language is Python, which I use to develop robust solutions that tackle real-world problems.
        Explore my projects to see how I apply my skills to create impactful technology solutions.
      </Typography>
    </Box>
  );
}

export default Introduction;
