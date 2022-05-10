import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickers() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
  }, [value]);

  let disableWeekends = (date) => {
    let newDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear());
    let blackoutDates = [
        "05-11-2022",
    ]
    return blackoutDates.includes(newDate) || date.getDay() === 0 || date.getDay() === 6;
  }

  let disableTime = (timevalue, clocktype) => {
    console.log(timevalue);
    console.log(clocktype);
    return clocktype === "minutes" && timevalue < 30 || clocktype === "hours" && timevalue < 12;
  }

  return (
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                sx={{ width: 300 }}
                allowSameDateSelection={false}
                renderInput={(props) => <TextField {...props} />}
                disablePast
                label="DateTimePicker"
                value={value}
                showTodayButton={true}
                minutesStep={30}
                minTime={new Date(2020, 8, 5, 9, 0)}
                maxTime={new Date(0, 0, 0, 18)}
                shouldDisableTime={disableTime}
                shouldDisableDate={disableWeekends}
                onChange={(newValue) => {
                setValue(newValue);
                }}
            />
          </LocalizationProvider>
  );
}
