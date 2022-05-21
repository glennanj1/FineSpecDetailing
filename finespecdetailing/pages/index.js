import * as React from 'react';
import Container from '@mui/material/Container';
import Pricing from '../Components/Pricing';
import { Canvas } from "@react-three/fiber";
import Porche from '../Components/Car.js';
export default function Index() {
  return (
    <Container maxWidth="lg">
      <main>
      <Canvas camera={{zoom: 100, position: [0, 0, 100]}}>
      
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Porche />
        
        </Canvas> 
      </main>
      <Pricing />
    </Container>
  );
}
