import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DateAndTimePickers from './EventCardEditFormComponents/DateAndTimePickers';
import IconLabelButtons from './EventCardEditFormComponents/IconLabelButtons';

export default function EventCardEditForm(props) {
  const [title, setTitle] = React.useState("")
  const [dateandtime, setDateandtime] =  React.useState("")
  const [shortdescription, setShortdescription] =  React.useState("")
  const [longdescription, setLongdescription] =  React.useState("")

  const saveEvent = () => {
    var eventlistLocal = [...props.eventlist]
    console.log("saved event")
    // eventlistLocal delete old event and replace with new
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '384px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          maxRows={1}
        />
        <DateAndTimePickers />
      </div>
      <div>
        <Button
          variant="contained"
          component="label"
          sx={{marginLeft: "8px"}}
        >
          Upload Image File(s)
          <input
            type="file"
            hidden
          />
        </Button>
      </div>
      <div>
        <TextField
          id="filled-multiline-static"
          label="Brief Description"
          rows={1}
          defaultValue=""
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Detailed Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>
      <div>
        <IconLabelButtons saveEvent={saveEvent}/>
      </div>
      <div><em>Preview:</em></div>
    </Box>
  );
}
