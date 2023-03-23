import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DataGrid from "./BookingTable";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import BookingCards from "../Components/BookingCards.js";
import Spinner from "./Spinner";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export default function AllBookings() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noBooking, setNoBooking] = useState(false);

  useEffect(() => {
    fetch("/api/bookings/")
      .then((res) => {
        setLoading(true);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setLoading(false);
        if (!data.data.length >= 1) setNoBooking(true);
        setBookings(data.data);
      })
      .catch((e) => {
        console.debug(e);
        setLoading(false);
      });
    console.log(session);
  }, [setBookings, setLoading]);

  if (status === "loading") return <Spinner />;

  if (status === "unauthenticated") {
    return (
      <Container
        component="main"
        maxWidth="lg"
        style={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignText: "center",
          alignContent: "center",
        }}
      >
        <h1>Please Login to Continue</h1>
        <Button
          onClick={() => signIn()}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          className={styles.Font}
        >
          Login
        </Button>
      </Container>
    );
  }
  if (status === "authenticated") {
    if (noBooking)
      return (
        <>
          <Container
            component="main"
            maxWidth="false"
            style={{ height: "50vh" }}
          >
            <h2>Currently No Bookings At this Time!</h2>{" "}
            <Button variant="contained" color="primary" href="/book">
              Book Now
            </Button>
          </Container>
        </>
      );

    if (session.status === "admin") return <DataGrid />;

    return (
      <>
        <h1>Your Bookings:</h1>
        <Box sx={{flexGrow: 1, height: '80%'}}>
            <Grid container spacing={6} >
          {bookings
          .sort((a, b) => a.appointment > b.appointment ? -1 : 1)
          .map((book) => {
            return(
              <Grid item sm={4} xs={12}>
                <BookingCards booking={book} />
              </Grid>
            );
          })}
            </Grid>
        </Box>
      </>
    );
  }
}
