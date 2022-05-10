import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import BasicDateTimePickers from '../Components/DateTimePicker.js'


export default function ComboBox() {
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState('');
    const [disableMake, setDisableMake] = useState(true);
    const [make, setMake] = useState('')
    const [disableModel, setDisableModel] = useState(true);
    const [model, setModel] = useState('')
    //api load
    const [models, setModels] = useState([]);
    useEffect(() => {
        if (year !== '') {
            setDisableMake(false);
            console.log('disable make')
            if (make !== '') {
                setDisableModel(false);
                console.log('disable model')
                if (models.length > 0) {
                    console.log('models loaded')
                } else {
                    setLoading(true);
                    fetch('/api/cars?year='+year+'&make='+make).then(r => r.json()).then(d => {
                        console.log(d);
                        setLoading(false);
                        if (d.length > 0) {
                            let a = []
                            d.map(m => {
                                a.push(m.model)
                            })
                            setModels(a);
                        } else {
                            //needs to be a toast
                            alert('empty list try again')
                        }
                        }).catch(e => {
                            console.log(e);
                            alert(e);
                        });
                    }
                }
        } else if (year === '') {
            setDisableMake(true);
            setDisableModel(true);
        }
    }, [year, make, model]);

    const handleChange = (event, value, reason) => {
        console.log(value)
        console.log(reason)
        console.log(event.target.id.split('-')[0])
        switch (event.target.id.split('-')[0]) {
            case 'year':
                console.log('year change')
                setYear(event.target.innerText);
               break;
            case 'make':
                setMake(event.target.innerText);
                break;
            case 'model':
                setModel(event.target.innerText);
                break;
            default:
                if(reason === 'clear') {
                    setYear('');
                    setMake('');
                    setModel('');
                    setModels([]);
                }
                break;
        }
    }

    const handleInputChange = (e, v, r) => {
      
    }

  return (
      <>
        <Autocomplete
        disablePortal
        id="year"
        options={years}
        sx={{ width: 300 }}
        value={year}
        onChange={handleChange}
        onInputChange={handleInputChange}
        renderInput={(params) => <TextField {...params} label="Year" />}
        />
        <Autocomplete
        disablePortal
        disabled={disableMake}
        id="make"
        options={makes}
        sx={{ width: 300 }}
        value={make}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Make" />}
        />
        { loading ? (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        ) : (
            <Autocomplete
            disablePortal
            disabled={disableModel}
            id="model"
            options={models}
            sx={{ width: 300 }}
            value={model}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} label="Model" />}
            />
        )}
                <TextField
                    sx={{ width: 300 }}
                    required
                    id="name"
                    label="Name"
                    defaultValue=""
                  />
            
                <TextField
                    sx={{ width: 300 }}
                    required
                    id="name"
                    label="Number"
                    defaultValue=""
                  />
          
                <TextField
                    sx={{ width: 300 }}
                    id="service"
                    select
                    value={services}
                    label="Service"
                    helperText="Please select your service"
                    >
                    {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                <BasicDateTimePickers />
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
    "Panoz"
];
const services = [
    {
      value: 'USD',
      label: 'Full Detail',
    },
    {
      value: 'EUR',
      label: 'Full Exterior Detail Only',
    },
    {
      value: 'BTC',
      label: 'Full Interior Detail Only',
    },
    {
      value: 'JPY',
      label: 'Maintenance Wash',
    },
    {
      value: 'JPY',
      label: 'Work Vehicle Detail',
    },
];
