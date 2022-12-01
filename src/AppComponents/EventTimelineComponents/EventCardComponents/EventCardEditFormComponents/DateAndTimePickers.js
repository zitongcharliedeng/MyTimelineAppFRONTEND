import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DateAndTimePickers(props) {

  const handleChange = (newValue) => {
    props.setDateandtime(newValue)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{flexDirection: "row"}}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={props.dateandtime}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={props.dateandtime}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack> 
    </LocalizationProvider>
  );
}
