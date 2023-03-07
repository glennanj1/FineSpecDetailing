import { useRouter } from "next/router";
import useSWR from "swr";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Booking() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/bookings/${query.id}`,
    fetcher
  );
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );


  const SoloCard = (props) => {
    let date = new Date(props.appointment);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = date.toLocaleString('en-US', 'HH:MM', { hour12: true })

    debugger
    return(
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {props.service}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name} {bull} {props.email} {bull} {props.phone}{" "}
          {bull} {props.accepted ? "Accepted" : "Pending"}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Created At {props.createdAt}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Make {props.make}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Model {props.model}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Year {props.year}
        </Typography>
        <h1>Appointment Information</h1>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {month}-{day}-{year} {bull} {time}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
     
        </Typography>

        <Typography variant="body2">
          
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </React.Fragment>
  )};

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Box sx={{ minWidth: 275, maxWidth: 500, padding: 10 }}>
        <Card
          variant="outlined"
      
        >
          <SoloCard     
          id={data.data.id}
          name={data.data.name}
          email={data.data.email}
          phone={data.data.phone}
          service={data.data.service}
          accepted={data.data.accepted}
          createdAt={data.data.createdAt}
          price={data.data.price}
          make={data.data.make}
          model={data.data.model}
          year={data.data.year}
          appointment={data.data.appointment}
  
          />
        </Card>
      </Box>
    </div>
  );
}
