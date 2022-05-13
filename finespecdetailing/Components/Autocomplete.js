import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import BasicDateTimePickers from "../Components/DateTimePicker.js";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function ComboBox() {
  const [isloading, setLoading] = useState(false);
  const [year, setYear] = useState("");
  const [disableMake, setDisableMake] = useState(true);
  const [make, setMake] = useState("");
  const [disableModel, setDisableModel] = useState(true);
  const [model, setModel] = useState("");
  const [service, setService] = useState("");
  //api load
  const [models, setModels] = useState([]);
  //props state
  const [value, setValue] = useState('');

  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    if (year !== "") {
      setDisableMake(false);
      console.log("disable make");
      if (make !== "") {
        setDisableModel(false);
        console.log("disable model");
        if (models.length > 0) {
          console.log("models loaded");
        } else {
          setLoading(true);
          fetch("/api/cars?year=" + year + "&make=" + make)
            .then((r) => r.json())
            .then((d) => {
              console.log(d);
              setLoading(false);
              if (d.length > 0) {
                let a = [];
                d.map((m) => {
                  a.push(m.model);
                });
                setModels(a);
              } else {
                //needs to be a toast
                alert("empty list try again");
                setModels([]);
                setModel("");
                setMake("");
                setYear("");
              }
            })
            .catch((e) => {
              console.log(e);
              alert(e);
            });
        }
      }
    } else if (year === "") {
      setDisableMake(true);
      setDisableModel(true);
    }
    console.log(name, email, phone, service, value);
  }, [year, make, model, name, email, phone, service, value]);

  const handleChange = (event, value, reason) => {
    console.log(value);
    console.log(reason);
    console.log(event.target.id.split("-")[0]);

    switch (event.target.id.split("-")[0]) {
      case "year":
        console.log("year change");
        setYear(event.target.innerText);
        break;
      case "make":
        setMake(event.target.innerText);
        break;
      case "model":
        setModel(event.target.innerText);
        break;
      case "service": {
        setService(event.target.innerText);
        break;
      }
      default:
        if (reason === "clear") {
          setYear("");
          setMake("");
          setModel("");
          setModels([]);
        }
        break;
    }
  };

  const handleTextChange = e => {
    console.log("text change");
    switch(e.target.id) {
      case "service":
        setService(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
    
  }
  const handleInputChange = (e, v, r) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleServiceChange = e => {
    e.preventDefault();
    setService(e.target.value);
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LocalCarWashIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Start Here
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete

                  disablePortal
                  fullWidth
                  id="year"
                  options={years}
                  value={year}
                  onChange={handleChange}
                  onInputChange={handleInputChange}
                  renderInput={(params) => (
                    <TextField {...params} required label="Year" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  fullWidth
                  disabled={disableMake}
                  id="make"
                  options={makes}
                  value={make}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} required label="Make" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  required
                  loading={isloading}
                  disablePortal
                  fullWidth
                  disabled={disableModel}
                  id="model"
                  options={models}
                  value={model}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} required label="Model" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  autoComplete="name"
                  id="name"
                  label="Name"
                  defaultValue=""
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  autoComplete="email"
                  id="email"
                  label="Email"
                  defaultValue=""
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="phone"
                  autoComplete="tel"
                  label="phone"
                  defaultValue=""
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="service"
                  select
                  required
                  value={service}
                  label="Service"
                  helperText="Please select your service"
                  onChange={handleServiceChange}
                >
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <BasicDateTimePickers value={value} setValue={setValue} />
              </Grid>
            </Grid>
            <h5>by clicking book now you agree to our <a href="/Legal" >terms and conditions</a></h5>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const years = [
  "",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const makes = [
  "",
  "Buick",
  "MINI",
  "Volvo",
  "Ford",
  "HUMMER",
  "GMC",
  "Subaru",
  "Mitsubishi",
  "Dodge",
  "Nissan",
  "Honda",
  "Lincoln",
  "Hyundai",
  "BMW",
  "Bentley",
  "Lexus",
  "Chevrolet",
  "Jaguar",
  "Mercedes-Benz",
  "Volkswagen",
  "Aston Martin",
  "Land Rover",
  "Pontiac",
  "Cadillac",
  "FIAT",
  "Saab",
  "Kia",
  "Lamborghini",
  "Audi",
  "Jeep",
  "MAZDA",
  "Suzuki",
  "Toyota",
  "Acura",
  "Saturn",
  "Chrysler",
  "Isuzu",
  "Ferrari",
  "Tesla",
  "INFINITI",
  "Oldsmobile",
  "Ram",
  "Eagle",
  "Porsche",
  "Mercury",
  "Scion",
  "Lotus",
  "Plymouth",
  "Freightliner",
  "Rolls-Royce",
  "SRT",
  "Maybach",
  "Alfa Romeo",
  "Geo",
  "smart",
  "Daewoo",
  "Maserati",
  "Daihatsu",
  "Genesis",
  "McLaren",
  "Fisker",
  "Panoz",
];
const services = [
  {
    value: "Full Detail",
    label: "Full Detail",
  },
  {
    value: "Full Exterior Detail Only",
    label: "Full Exterior Detail Only",
  },
  {
    value: "Full Interior Detail Only",
    label: "Full Interior Detail Only",
  },
  {
    value: "Maintenance Wash",
    label: "Maintenance Wash",
  },
  {
    value: "Work Vehicle Detail",
    label: "Work Vehicle Detail",
  },
];
