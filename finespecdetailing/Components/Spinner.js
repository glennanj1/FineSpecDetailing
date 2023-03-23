import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Spinner() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      style={{
        height: "80vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignText: "center",
        alignContent: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Container>
  );
}
