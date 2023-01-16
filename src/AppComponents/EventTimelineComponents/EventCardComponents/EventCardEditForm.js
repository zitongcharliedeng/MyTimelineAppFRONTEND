import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateAndTimePickers from './EventCardEditFormComponents/DateAndTimePickers';
import IconLabelButtons from './EventCardEditFormComponents/IconLabelButtons';
import dayjs from 'dayjs';
import ImageUploadForm from './EventCardEditFormComponents/ImageUploadForm';
import axios from 'axios';

export default function EventCardEditForm(props) {
  const [title, setTitle] = React.useState('')
  const [dateAndTime, setDateAndTime] =  React.useState(dayjs())
  const [shortDescription, setShortDescription] =  React.useState('')
  const [longDescription, setLongDescription] =  React.useState('')
  const [selectedFile, setSelectedFile] = React.useState(null);

  const saveEvent = async() => {
    //handleFileSubmit GenerateImageFileUrl
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await axios.post("http://localhost:4000/images", formData)
      //saveEvent WithGeneratedImageFileUrl
      const updatedEvent = {
        id: props.id,
        editMode: false,
        title: title,
        dateAndTime: dateAndTime,
        imageUrl: response.data.imageUrl,
        shortDescription: shortDescription,
        longDescription: longDescription,
      }
      var eventlistLocal = [...props.eventlist]
      const indextoreplace = eventlistLocal.map(o => o.id).indexOf(props.id);
      eventlistLocal[indextoreplace] = updatedEvent
      console.log("!!!", eventlistLocal)
      props.setEventlist(eventlistLocal)
      props.updateEventlistBackend(eventlistLocal)
    } catch(error) {
      console.log(error)
    } 
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
        <ImageUploadForm selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
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
