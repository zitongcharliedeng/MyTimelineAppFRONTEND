import React from 'react';
import { Button } from '@mui/material';

const ImageUploadForm = ({selectedFile, setSelectedFile}) => {
  // a local state to store the currently selected file.
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div className='imageFileButton'>
      <Button
          variant="contained"
          component="label"
          sx={{marginLeft: "8px"}}
        >
          {selectedFile? "Change Image File" : "Select Image File"}
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileSelect}
            hidden
          />
      </Button>
      {selectedFile? selectedFile.name : ''}
    </div>
  )
};

export default ImageUploadForm;