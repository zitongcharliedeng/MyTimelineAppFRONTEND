import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DateAndTimePickers from './EventCardEditFormComponents/DateAndTimePickers';
import IconLabelButtons from './EventCardEditFormComponents/IconLabelButtons';
import dayjs from 'dayjs';

export default function EventCardEditForm(props) {
  const [title, setTitle] = React.useState("")
  const [dateandtime, setDateandtime] =  React.useState(dayjs())
  const [shortdescription, setShortdescription] =  React.useState("")
  const [longdescription, setLongdescription] =  React.useState("")
  const [imageFile, setImageFile] = React.useState()

  function handleChange(event) {
    setImageFile(event.target.files[0])
  }

  const saveEvent = () => {
    const updatedEvent = {
      id: props.id,
      editmode: false,
      title: title,
      dateandtime: dateandtime,
      imageupload: imageFile,
      //imageurl: defined by backend after image uploaded
      shortdescription: shortdescription,
      longdescription: longdescription,
    }
    var eventlistLocal = [...props.eventlist]
    const indextoreplace = eventlistLocal.map(o => o.id).indexOf(props.id);
    eventlistLocal[indextoreplace] = updatedEvent
    props.setEventlist(eventlistLocal)
  };
  
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
          onChange={(event)=>{setTitle(event.target.value)}}
        />
        <DateAndTimePickers dateandtime={dateandtime} setDateandtime={setDateandtime}/>
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
            accept=".jpeg,.png"
            onChange={handleChange}
          />
        </Button>
      </div>
      <div>
        <TextField
          id="filled-multiline-static"
          label="Short Description"
          rows={1}
          defaultValue=""
          variant="filled"
          onChange={(event)=>{setShortdescription(event.target.value)}}
        />
        <TextField
          id="filled-multiline-static"
          label="Long Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          onChange={(event)=>{setLongdescription(event.target.value)}}
        />
      </div>
      <div>
        <IconLabelButtons saveEvent={saveEvent}/>
      </div>
      <div><em>Preview:</em></div>
    </Box>
  );
}
