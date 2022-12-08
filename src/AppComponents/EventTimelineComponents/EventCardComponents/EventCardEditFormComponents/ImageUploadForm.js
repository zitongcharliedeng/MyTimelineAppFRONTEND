import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const ImageUploadForm = (props) => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await axios.post("http://localhost:4000/images", formData)
      props.setImageUrl(response.data.imageUrl)
    } catch(error) {
      console.log(error)
    } 
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div>
      <Button
          variant="contained"
          component="label"
          sx={{marginLeft: "8px"}}
        >
          Select Image File
          <input
            type="file"
            accept=".jpeg,.png"
            onChange={handleFileSelect}
            hidden
          />
      </Button>
      {selectedFile? selectedFile.name : ''}
      <Button type="submit" value="Upload File" onClick={handleSubmit}>
        Upload Image File
      </Button>
    </div>
  )
};

export default ImageUploadForm;