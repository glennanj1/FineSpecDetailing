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
import Button from "@mui/material/Button";
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'
import styles from '../Styles/Autocomplete.module.css'
import ActionAlerts from '../Components/Alert.js'
import { signIn } from "next-auth/react";
import Spinner from "../Components/Spinner.js"

export default function ComboBox() {
  const router = useRouter()
  //session check
  const { data: session, status } = useSession()

  const [isloading, setLoading] = useState(false);
  const [year, setYear] = useState(null);
  const [disableMake, setDisableMake] = useState(true);
  const [make, setMake] = useState(null);
  const [disableModel, setDisableModel] = useState(true);
  const [model, setModel] = useState(null);
  const [disableType, setDisableType] = useState(true);
  const [type, setType] = useState(null);
  const [typeForApi, setTypeForApi] = useState(null);
  const [service, setService] = useState(null);
  //api load
  const [models, setModels] = useState([]);
  //props state
  const [value, setValue] = useState(null);
  //full car
  const [car, setCar] = useState([]);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(session?.user?.email);
  const [phone, setPhone] = useState(null);
  const [alert, setAlert] = useState(false);

  // adding loading state to render spinner after submission
  const [submitLoading, setSubmitLoading] = useState(false);

  const callFetch = () => {
    setModels([]);
    fetch("/api/cars?year=" + year + "&make=" + make + "&type=" + typeForApi)
    .then((r) => r.json())
    .then((d) => {
      debugger;
      setLoading(false);
      if (d.Results.length > 0) {
        setCar(d);
        let a = [];
        d.Results.map((m) => {
          debugger;
          console.log(m);
          a.push({value: m.Model_ID, label: m.Model_Name})
          //a.push({value: m.type, label: m.model});
        });
        setModels(a);
      } else {
        //needs to be a toast
        debugger;
        alert("empty list try again");
        setModels([]);
        setType(null);
        setTypeForApi(null);
        setModel(null);
        setMake(null);
        setYear(null);
      }
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
      // alert(e);
    });
  }

  useEffect(() => {
    if (year !== null) {
      setDisableMake(false);
      console.log("disable make");
      if (make !== null) {
        console.log("disable type");
        setDisableType(false);
        if (type !== null) {
          console.log("disable model");
          setDisableModel(false);
          console.log("disable model");
          if (models.length > 0) {
            console.log("models loaded");
          } else {
            setLoading(true);
            callFetch();
          }
        }
      }
    } 
    console.log(name, email, phone, service, value, type);
  }, [year, make, model, name, email, phone, service, value, type]);

  let checkChange = (label, value) => {
    debugger;
    if (year !== null && make !== null && type !== null) {
      switch (label) {
        case "year":
          year !== value ? callFetch() : null 
          break;
        case "make":
          make !== value ? callFetch() : null
          break;
        case "type": {
          type !== value.label ? callFetch() : null
          break
        }
        default:
          console.log('error check change')
          break;
      }
    }
  }

  const handleChange = (event, value, reason) => {
  
    switch (event.target.id.split("-")[0]) {
      case "year":
        checkChange("year", value);
        setYear(value);
        break;
      case "make":
        checkChange("make", value);
        setMake(value);
        break;
      case "model":
        setModel(value.label);
        break;
      case "service": {
        setService(value);
        break;
      }
      case "type": {
        checkChange("type", value);
        setType(value.label);
        setTypeForApi(value.value);
        break
      }
      default:
        console.log(reason)
        if (reason === "clear") {
          setType(null);
          setYear(null);
          setTypeForApi(null);
          setMake(null);
          setModel(null);
          setModels([]);
        }
        break;
    }
  };

  const handleTextChange = (event, value) => {
    switch(event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  }
  const handleInputChange = (e, v, r) => {}; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const res = await fetch('/api/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        booking: {
          name: name,
          email: session?.user?.email,
          phone: phone,
          service: service,
          accepted: false,
          year: year,
          make: make,
          model: model,
          type: type,
          appointment: value,
          Account: session.userId
        },
        //car: car,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.success === true) {
      setAlert(true);
      setTimeout(() => {
        setYear(null);
        setMake(null);
        setModel(null);
        setModels([]);
        setName(null);
        setType(null);
        setTypeForApi(null);
        setEmail(null);
        setPhone(null);
        setService(null);
        setService(null);
        setValue(null);
        setAlert(false);
        router.push(`/booking/${data.data._id}`);
      }, 2000);
    } else {
      alert("Booking Failed Try Again");
      setSubmitLoading(false);
    }
  };
    

  const handleServiceChange = e => {
    e.preventDefault();
    setService(e.target.value);
  }

  if (submitLoading || status === "loading")  return <Spinner />
    

  if (status === "unauthenticated") {
    signIn();
    return (
      <Container component="main" maxWidth="lg" style={{height: '80vh', display: 'flex', justifyContent: 'center', alignText: 'center', alignContent: 'center'}} className={styles.Font}>
        <h1>Redirecting...</h1>
      </Container>
    )
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        {alert ? <ActionAlerts type="success" message="Successfully Booked, Thank You!" /> : null}
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
                  options={makes.sort((a, b) => (a > b) ? 1 : -1)}
                  value={make}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} required label="Make" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  fullWidth
                  disabled={disableType}
                  id="type"
                  options={types.sort((a, b) => (a > b) ? -1 : 1)}
                  value={type}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} required label="Type" />
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
                  value={name}
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  autoComplete="email"
                  id="email"
                  disabled='true'
                  label="Email"
                  defaultValue=""
                  value={session?.user?.email}
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
                  value={phone}
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="service"
                  select
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
  "2021",
  "2022",
  "2023",
];
const makes = [
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

const types = [
  {
    value: 'car',
    label: 'Car',
  },
  {
    value: 'mpv', 
    label: 'SUV',
  },
  {
    value: 'truck',
    label: 'Truck', 
  }
]
const services = [
  {
    value: "Express Detail",
    label: "Express Detail",
  },
  {
    value: "Full Detail",
    label: "Full Detail",
  },
  {
    value: "Full Exterior Detail",
    label: "Full Exterior Detail",
  },
  {
    label: "Full Interior Detail",
    value: "Full Interior Detail",
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

