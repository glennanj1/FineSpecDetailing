import * as React from "react";
import Container from "@mui/material/Container";
import styles from "../Styles/index.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Index() {
  return (
    <>
        <Container
          disableGutters
          maxWidth="false"
          component="main"
          className={styles.Container}
          sx={{ pt: 8, pb: 6}}
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
              className={styles.Font}
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
            <Button variant="contained" color="primary" href="/Book" sx={{ width: "220px", height: '100px', fontSize: '30px' }}>
              Book Now
            </Button>
          </div>
        </Container>

      <div className={styles.video}>
        <video
          autoPlay
          playsInline
          defaultmuted="true"
          muted
          loop
          style={{
            width: "100%",
            height: "100vh",
            top: "0",
            // position: "absolute",
            zIndex: "-1",
      
          }}
        >
          <source
            src="/drippy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
