import Container from '@mui/material/Container'
import styles from '../Styles/Book.module.css';
import AllBookings from '../Components/AllBookings';


export default function Bookings() {
  return (
    <Container maxWidth="xl">
      <main className={styles.main}>        
        <AllBookings />
      </main>
    </Container>
  )
}
