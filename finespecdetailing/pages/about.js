import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function About() {
  return (
    <Container maxWidth="sm">
    <h1>Tst</h1>
      <Box sx={{ my: 4 }}>
        <iframe src="https://v1.embednotion.com/embed/cdbdaa76d58a44f2b13e0cd1c96b0443" style={{borderRadius: "100px"}} width="100%" height="450"></iframe>
      </Box>
    </Container>
  );
}
