import React from 'react'
import Container from "@mui/material/Container";
import styles from "../Styles/Contact.module.css"

export default function Contact() {
  return (
  <>
    <Container component="main" maxWidth="md" className={styles.Container}>
        <h1 className={styles.Font}>
            Contact Us
        </h1>
        <h1 className={styles.Font}>
            Location
        </h1>
        <h1 className={styles.Font}>
            Privacy policy
        </h1>
        <h1 className={styles.Font}>
            Terms of use
        </h1>
    </Container>
  </>
  )
}
