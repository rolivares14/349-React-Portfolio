// Projects.js
import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function Projects() {
  const projects = [
    { name: 'Project 1', description: 'This Python program is designed to find common free time slots between two groups of people who have busy schedules and working periods. It can be used to identify suitable meeting times when multiple parties need to find a convenient time to meet. The program reads input data from a text file and writes the results to an output file.', link: 'https://github.com/rolivares14/335project1.git' },
    { name: 'Project 2', description: 'Python program that contains implementations of algorithms to find the shortest path in a graph with specific color constraints using both Breadth-First Search (BFS) and Depth-First Search (DFS). The goal is to navigate the graph while adhering to rules about the sequence of colors in the paths.', link: 'https://github.com/rolivares14/shortest-colorpath-bfs-dfs.git' },
    { name: 'Project 3', description: 'This is a Jarvis voice assistant created in Python. It will greet you on start up and waits for your voice commands.', link: 'https://github.com/rolivares14/Jarvis-Assistant.git' }
  ];

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ '&:hover': { boxShadow: 10 } }}>
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">{project.name}</Typography>
              <Typography color="textSecondary">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" target="_blank" rel="noopener noreferrer" href={project.link}>Link to Project</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
