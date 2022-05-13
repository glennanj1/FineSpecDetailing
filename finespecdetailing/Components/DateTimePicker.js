import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickers(props) {

  useEffect(() => {
    console.log(props.value)
  }, [props.value]);

  let disableWeekends = (date) => {
    let newDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear());
    let today = new Date();
    let formatToday = (((today.getMonth() > 8) ? (today.getMonth() + 1) : ('0' + (today.getMonth() + 1))) + '-' + ((today.getDate() > 9) ? today.getDate() : ('0' + today.getDate())) + '-' + today.getFullYear());
    let blackoutDates = [
        formatToday,
        "05-11-2022",
        "05-12-2022",
        "05-13-2022",
        "05-14-2022",
    ]
    return blackoutDates.includes(newDate) || date.getDay() === 0 || date.getDay() === 6;
  }

  let disableTime = (timevalue, clocktype) => {
    // console.log(timevalue);
    // console.log(clocktype);
    return clocktype === "minutes" && timevalue < 30 || clocktype === "hours" && timevalue < 12;
  }

  return (
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                sx={{ width: 300 }}
                allowSameDateSelection={false}
                renderInput={(props) => <TextField required {...props} />}
                disablePast
                label="DateTimePicker"
                value={props.value}
                showTodayButton={true}
                minutesStep={30}
                minTime={new Date(2020, 8, 5, 9, 0)}
                maxTime={new Date(0, 0, 0, 18)}
                shouldDisableTime={disableTime}
                shouldDisableDate={disableWeekends}
                onChange={(newValue) => {
                  props.setValue(newValue);
                }}
            />
          </LocalizationProvider>
  );
}
