import React from 'react'
import Container from '@mui/material/Container'
import styles from '../Styles/Book.module.css';
import AllBookings from '../Components/AllBookings';
export default function Bookings() {
  return (
    <>
    <Container maxWidth="md">
      <main className={styles.main}>        
              <AllBookings />
      </main>
    </Container>
  </>
  )
}
