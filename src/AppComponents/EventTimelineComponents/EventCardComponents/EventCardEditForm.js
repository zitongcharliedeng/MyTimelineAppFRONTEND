import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DateAndTimePickers from './EventCardEditFormComponents/DateAndTimePickers';
import IconLabelButtons from './EventCardEditFormComponents/IconLabelButtons';
import dayjs from 'dayjs';
import ImageUploadForm from './EventCardEditFormComponents/ImageUploadForm';

export default function EventCardEditForm(props) {
  const [title, setTitle] = React.useState('')
  const [dateAndTime, setDateAndTime] =  React.useState(dayjs())
  const [shortDescription, setShortDescription] =  React.useState('')
  const [longDescription, setLongDescription] =  React.useState('')
  const [imageUrl, setImageUrl] = React.useState('')

  const saveEvent = () => {
    const updatedEvent = {
      id: props.id,
      editMode: false,
      title: title,
      dateAndTime: dateAndTime,
      imageUrl: imageUrl,
      shortDescription: shortDescription,
      longDescription: longDescription,
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
        <DateAndTimePickers dateAndTime={dateAndTime} setDateAndTime={setDateAndTime}/>
      </div>
      <div>
        <ImageUploadForm setImageUrl={setImageUrl} />
      </div>
      <div>
        <TextField
          id="filled-multiline-static"
          label="Short Description"
          rows={1}
          defaultValue=""
          variant="filled"
          onChange={(event)=>{setShortDescription(event.target.value)}}
        />
        <TextField
          id="filled-multiline-static"
          label="Long Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          onChange={(event)=>{setLongDescription(event.target.value)}}
        />
      </div>
      <div>
        <IconLabelButtons saveEvent={saveEvent}/>
      </div>
      <div><em>Preview:</em></div>
    </Box>
  );
}
