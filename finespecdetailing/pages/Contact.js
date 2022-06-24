import React from 'react'
import Container from "@mui/material/Container";
import styles from "../Styles/Contact.module.css"

export default function Contact() {
  return (
  <>
    <Container component="main" maxWidth="md" className={styles.Container}>
        <h1>
            Contact Us
        </h1>
        <h1>
            Location
        </h1>
        <h1>
            Privacy policy
        </h1>
        <h1>
            Terms of use
        </h1>
    </Container>
  </>
  )
}
