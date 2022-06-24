import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import IconButton from '@mui/material/IconButton';
import styles from '../Styles/Footer.module.css'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <a href="https://glennan.netlify.app" color="inherit" style={{textDecoration: 'none', color: 'silver'}}>
          Code Cloud
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const footers = [
    {
      title: 'About',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cleaning',
      ],
    },
    {
      title: 'Resources',
      description: ['FAQ'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

export default function Footer() {
  return (
   <>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          mt: 2,
          py: [1, 1],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href={`/${footer.title}`} variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={4} justifyContent="space-evenly" >
        
            <Grid item xs={6} sm={3} key={'title'} className={styles.Grid}>
              <IconButton sx={{display: 'flex', justifyContent: 'center'}}>
                <FacebookIcon />
              </IconButton>
              <h3>FaceBook</h3>
            </Grid>
            <Grid item xs={6} sm={3} key={'title'} className={styles.Grid}>
              <IconButton sx={{display: 'flex', justifyContent: 'center'}}>
                  <InstagramIcon />
              </IconButton>
                <h3>Instagram</h3>
            </Grid>
            <Grid item xs={6} sm={3} key={'title'} className={styles.Grid}>
              <IconButton sx={{display: 'flex', justifyContent: 'center'}}>
                <EmailIcon />
              </IconButton>
              <h3>Email</h3>
            </Grid>
     
        
            <Grid item xs={6} sm={3} key={'title'} className={styles.Grid}>
              <IconButton sx={{display: 'flex', justifyContent: 'center'}}>
                <PhoneIphoneIcon />
              </IconButton>
              <h3>Call</h3>
            </Grid>
     
        
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
   </>
  )
}
