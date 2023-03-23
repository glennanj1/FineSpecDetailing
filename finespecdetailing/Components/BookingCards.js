import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function BookingCards({booking}) {
  const date = new Date(booking?.appointment);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = date.toLocaleString("en-US", "HH:MM", { hour12: true });

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <Card variant="outlined" sx={{mb: 5, boxShadow: '10px 10px #607d8b'}}>
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 32 }}
              color="text.secondary"
              gutterBottom
            >
              {booking?.service}
            </Typography>
            <Typography sx={{mb: 1.5}} variant="h5" component="div">
              Status {bull} {booking?.accepted ? "Accepted" : "Pending"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Make {booking?.make}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Model {booking?.model}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Year {booking?.year}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              {month}-{day}-{year} {bull} {time}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Calendar Invite Download</Button>
          </CardActions>
        </>
      </Card>
    </>
  );
}
