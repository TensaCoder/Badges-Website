import React, { useState } from 'react';
// import axios from 'axios';
import './UploadFiles.css';

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(file => file.name.endsWith('.csv'));
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(file => file.name.endsWith('.csv'));
    setFiles([...files, ...selectedFiles]);
  };

  const handleFileUpload = async () => {
    // You can implement the file upload logic here
    console.log('Files ready for upload:', files);
    // Uncomment below code when implementing file upload logic
    /*
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });
      // Replace 'your-backend-endpoint' with your actual backend endpoint
      const response = await axios.post('your-backend-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
    */
  };

  return (
    <div className="upload-files-container">
      <div
        className="upload-files-drop-area"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag & drop CSV files here</p>
      </div>
      <div className="upload-files-input-area">
        <input className="upload-files-input" type="file" multiple accept='.csv' onChange={handleFileSelect} />
        <br />
      </div>
        <button className="upload-files-button" disabled={files.length === 0} onClick={handleFileUpload}>Upload Files</button>
        <div className="upload-files-list">
          {files.map((file, index) => (
            <div key={index} className="upload-files-list-item">
              <p>File {index + 1}: {file.name}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default UploadFiles;
