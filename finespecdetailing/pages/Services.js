import React from 'react'
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../Styles/Services.module.css";
import { useRouter } from 'next/router';


const tiers = [
  {
    title: "Express Detail",
    price: "75",
    description: [
      "Foam Bath",
      "2 Bucket Wash",
      "Wheels Cleaned (faces only)",
      "Tires Cleaned & Dressed",
      "Windows & Door Jambs Cleaned",
      "Interior Vacuum",
      "Interior Wipedown",
    ],
    buttonText: "Book Now",
    buttonVariant: "outlined",
  },
  {
    title: "Full Detail",
    price: "300",
    description: [
      "Foam Bath",
      "2 Bucket Wash",
      "Engine Detail",
      "Clay Bar Treatment",
      "Paint Sealant",
      "Wheels & Wheel Wells & Tires Cleaned & Dressed",
      "Windows & Door Jambs Cleaned",
      "Deep Interior Vacuum",
      "Deep Clean All Door Panels, Dashboard, Console, Cupholders, etc.",
      "Carpet Extraction (IF NEEDED)",
      "Steam Clean all Interior Carpets & Floor Mats",
    ],
    buttonText: "Book Now",
    buttonVariant: "contained",
  },
  {
    title: "Full Interior",
    price: "150",
    description: [
      "Windows & Door Jambs Cleaned",
      "Deep Interior Vacuum",
      "Deep Clean All Door Panels, Dashboard, Console, Cupholders, etc.",
      "Carpet Extraction (IF NEEDED)",
      "Clean & Leather Conditioned Seats & Trim (IF APPLICABLE)",
      "Steam Clean all Interior Carpets & Floor Mats",
    ],
    buttonText: "Book Now",
    buttonVariant: "outlined",
  },
];

const tier2 =[
  {
    title: "Maintenance Wash",
    price: "75",
    description: [
      "Foam Bath",
      "2 Bucket Wash",
      "Paint Sealant Boost",
      "Wheels Cleaned (faces only)",
      "Tires Cleaned & Dressed",
      "Windows & Door Jambs Cleaned",
      "Interior Vacuum",
      "Interior Wipedown",
    ],
    buttonText: "Book Now",
    buttonVariant: "outlined",
  },
  {
    title: "Full Exterior",
    price: "150",
    description: [
      "Foam Bath",
      "2 Bucket Wash",
      "Clay Bar Treatment",
      "Paint Sealant",
      "Wheels & Wheel Wells & Tires Cleaned & Dressed",
      "Windows & Door Jambs Cleaned",
    ],
    buttonText: "Book Now",
    buttonVariant: "contained",
  },
  {
    title: "Upcharge Add-ons",
    price: "25",
    description: [
      "Pet Hair Removal $25+",
      "Steam Clean Interior $50+",
      "Trim Conditioner $50",
      "Odor Eliminator $50",
    ],
    buttonText: "Book Now",
    buttonVariant: "outlined",
  },
]


export default function Resources() {

  const router = useRouter()


  let handleClick = (e) => {
    e.preventDefault();
    e.target.childNodes[0].data === "Book Now"
      ? router.push("/Book")
      : console.log("click");
  };

  return (
    <>
      <div className={styles.background}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Container
        maxWidth="lg"
        component="main"
        sx={{ background: "transparent", marginTop: '30px'}}
        className={styles.firstContainer}
      >
        <Grid container spacing={5} alignItems="flex-end" className={styles.Grid}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Full Detail" ? 12 : 6}
              md={4}
              
            >
              <Card sx={{ background: "#000000a1" }} > 
                <CardHeader
                  title={tier.title}
    
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Full Detail" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" color="text.secondary" sx={{paddingRight: '10px'}} className={styles.Font}>
                      Starting At
                    </Typography>          
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                      className={styles.Font}
                    >
                      ${tier.price}
                    </Typography>
                    {/* <Typography variant="h6" color="text.secondary">
                      .99
                    </Typography> */}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        className={styles.Font}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={handleClick}
                    fullWidth
                    variant={tier.buttonVariant}
                    className={styles.Font}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
        <Container
        maxWidth="lg"
        component="main"
        sx={{ background: "transparent", marginTop: '100px' }}
        className={styles.secondContainer}
      >
        <Grid container spacing={5} alignItems="flex-end" className={styles.Grid}>
          {tier2.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Full Detail" ? 12 : 6}
              md={4}
            >
              <Card sx={{ background: "#000000a1" }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                      className={styles.Font}
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" className={styles.Font}>
                      .99
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        className={styles.Font}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={handleClick}
                    fullWidth
                    variant={tier.buttonVariant}
                    className={styles.Font}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </div>
    </>
  )
}
