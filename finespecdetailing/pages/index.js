import * as React from "react";
import Container from "@mui/material/Container";
import styles from "../Styles/index.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from '@mui/material/Fade';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Index() {
  return (
    <>
      {/* <video
          autoPlay
          playsInline
          defaultmuted="true"
          muted
          loop
          style={{
            width: "100%",
            height: "100vh",
            top: "0",
            position: "absolute",
            zIndex: "-1",
      
          }}
        >
          <source
            src="https://vod-progressive.akamaized.net/exp=1678265490~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2966%2F19%2F489831438%2F2198833988.mp4~hmac=9239730db12eca9c7c38a6efc224edf53906d26564e361dddfaa8429383a6879/vimeo-prod-skyfire-std-us/01/2966/19/489831438/2198833988.mp4"
            // src="/drippy.mp4"
            //src="https://finespecdetailing.b-cdn.net/drippy.mp4"
            type="video/mp4"
          />
        </video> */}
      <Container
        disableGutters
        maxWidth="false"
        component="main"
        className={styles.Container + ' ' + styles.car}
        sx={{ pt: 8, pb: 6, position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            flexDirection: "column",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <div>
            <Fade in={true}>
            <Box sx={{ width: "80vw" }}>
              <Paper elevation={24} sx={{ padding: "30px", backgroundColor: '#12121287'}}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  sx={{textAlign: 'left'}}
                  className={styles.Font}
                >
                  At Fine Spec Detailing, we're passionate about enhancing the
                  appearance and value of your vehicle through high-quality
                  detailing services.
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  color="black"
                  component="p"
                  className={styles.SubHead}
                  sx={{
                    textAlign: 'left'
                  }}
                >
                  Serving the Philadelphia Suburban Region
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    pt: '10px',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="/book"
                    className={styles.Book}
                    sx={{ width: "220px", height: "60px"}}
                  >
                    Book Now
                  </Button>
                </Box>
              </Paper>
            </Box>
            </Fade>
          </div>
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
            height: "100vh",
            top: "0",
            // position: "absolute",
            zIndex: "-1",
          }}
          className={styles.VideoStyle}
        >
          <source
            //src="https://vod-progressive.akamaized.net/exp=1678265490~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2966%2F19%2F489831438%2F2198833988.mp4~hmac=9239730db12eca9c7c38a6efc224edf53906d26564e361dddfaa8429383a6879/vimeo-prod-skyfire-std-us/01/2966/19/489831438/2198833988.mp4"
            src="/drippy.mp4"
            //src="https://finespecdetailing.b-cdn.net/drippy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
