import * as React from 'react';
import Container from '@mui/material/Container';
import Pricing from '../Components/Pricing';
import styles from '../Styles/index.module.css';
import Image from 'next/image';
import porche from '../public/images/porche2.png'
export default function Index() {
  return (
    <Container maxWidth="lg">
      <main className='styles.mainContainer'>
        <div style={{width: '100%', height: '100%', position: 'fixed', background: 'black', zIndex: '-1000'}}>
          <Image layout="fill" src={porche} objectFit="contain" alt="porche"/>
        </div>
        <div className="styles.priceContainer">
          <Pricing />
        </div>  
      </main>
    </Container>
  );
}
