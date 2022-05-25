import * as React from 'react';
import Container from '@mui/material/Container';
import Pricing from '../Components/Pricing';

export default function Index() {
  return (
    <Container maxWidth="lg" style={{backgroundImage: 'url(/porche.png)', backgroundPosition: 'bottom', backgroundAttachment: 'fixed', backgroundSize: 'contain'}}>
      <Pricing />
    </Container>
  );
}
