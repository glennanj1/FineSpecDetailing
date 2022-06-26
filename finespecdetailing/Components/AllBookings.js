import React, { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import DataGrid from "./BookingTable";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button'
export default function AllBookings() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setBookings(data.data);
      })
      .catch((e) => {
        console.debug(e);
        setLoading(false);
      });
  }, [setBookings, setLoading]);

  if (status === "loading") {
    return (
      <Container component="main" maxWidth="md">
        <h1>Loading ...</h1>
      </Container>
    );
  }
  if (status === "unauthenticated") {
    return (
      <Container component="main" maxWidth="md" style={{height: '30vh', display: 'flex', justifyContent: 'center', alignText: 'center', alignContent: 'center'}}>
     
        <h1>Please Login to Continue</h1>
    
      </Container>
    );
  }
  if (status === "authenticated") {
    return (
      <>
        {session.status === "admin" ? (
          <DataGrid />
        ) : (
          <>
            <h1>Hey {session.user.email}</h1>
            {!loading && bookings.length >= 1 ? (
            <DataGrid />
             
            
            ) : (
              <>
                <h2>Currently No Bookings At this Time!</h2>{" "}
                <Button variant="contained" color="primary" href="/Book">
                  Book Now
                </Button>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
