import * as React from "react";
import Container from "@mui/material/Container";
import Pricing from "../Components/Pricing";
import styles from "../Styles/index.module.css";

export default function Index() {
  return (
    <>
      <div className={styles.video}>
        <video
          autoPlay
          playsInline
          defaultmuted="true"
          muted
          loop
          style={{
            width: "100vw",
            height: "100vh",
            top: "0",
            position: "absolute",
            zIndex: "-1",
            borderRadius: "50%",
          }}
        >
          <source
            src="https://finespecdetailing.b-cdn.net/drippy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Container maxWidth="lg">
        <Pricing />
      </Container>
    </>
  );
}
