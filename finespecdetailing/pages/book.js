import AutoComplete from '../Components/Autocomplete.js'
import styles from '../Styles/Book.module.css';
import { Container } from '@mui/material';

export default function Book() {
  return (
    <>
      <Container maxWidth="xl">
        <main className={styles.main}>            
          <AutoComplete />  
        </main>
      </Container>
    </>
  );
}





