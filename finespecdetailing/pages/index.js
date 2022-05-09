import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Pricing from '../Components/Pricing';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Link href="/">
      </Link>
      <Pricing />
    </Container>
  );
}
