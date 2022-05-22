import * as React from 'react';
import Container from '@mui/material/Container';
import Pricing from '../Components/Pricing';
import { Canvas } from "@react-three/fiber";
import Porche from '../Components/Car.js';
export default function Index() {
  return (
    <Container maxWidth="lg">
      <main style={{top: '100px', position: 'fixed', zIndex: '-1000', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <Canvas 
      style={{background: 'black', width: '40vw', height: '100vh', borderRadius: '100px', border: 'solid 10px silver', paddingTop: '10px'}} 
      camera={{zoom: 20, position: [0, 0, 50]}}>
            <ambientLight intensity={.5} />
            <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Porche />
        </Canvas> 
      </main>
      <Pricing />
    </Container>
  );
}
