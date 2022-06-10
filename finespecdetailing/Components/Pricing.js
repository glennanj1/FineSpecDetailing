import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";

const tiers = [
  {
    title: "Full Detail",
    price: "260",
    description: [
      "Sealant",
      "Clay & Wax",
      "Polish",
      "Door Jams",
      "& Much More",
    ],
    buttonText: "Calendar",
    buttonVariant: "outlined",
  },
  {
    title: "Exterior + Detail",
    subheader: "Foam Wash",
    price: "150",
    description: [
      "Foam Wash",
      "Tires and Wheels Cleaned",
      "Bug Removal",
      "Engine Bay + Dressed",
      "& Much More",
    ],
    buttonText: "Book Now",
    buttonVariant: "contained",
  },
  {
    title: "Maintenance Wash",
    price: "75",
    description: ["Exterior", "Interior", "Foam Wash", "Vacuum", "& Much More"],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  const router = useRouter();
  let handleClick = (e) => {
    e.preventDefault();
    e.target.childNodes[0].data === "Book Now"
      ? router.push("/Book")
      : console.log("click");
    console.log(e.target.childNodes[0].data);
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6, width: "100%", height: "100vh"}}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            flexDirection: "column",
            height: "70vh",
            alignItems: "center",
          }}
        >
        <div>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Fine Spec Detailing
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="black"
            component="p"
            sx={{fontWeight: 500, textShadow: "1px 1px 1px white"}}
          >
            Serving the Philadelphia Suburban region
          </Typography>
        </div>
          <Button variant="contained" color="primary" href="/Book" sx={{ width: "120px" }}>
            Book Now
          </Button>
        </div>
      </Container>
      {/* End hero unit */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{ background: "transparent" }}
        style={{
          backgroundImage: "url(/porche.png)",
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          zIndex: "0",
        }}
      >
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
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
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
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
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
