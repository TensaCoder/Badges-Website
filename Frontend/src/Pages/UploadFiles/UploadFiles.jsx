import React, { useState } from 'react';
import axios from 'axios';
import './UploadFiles.css';
import dragdropIcon from ".//dragdrop.png";
import Navbar from '../../Components/Navbar';

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

    // Show or hide "No files chosen" message based on whether files are selected
    const noFilesMessage = document.getElementById('noFilesMessage');
    if (selectedFiles.length > 0) {
      noFilesMessage.style.display = 'none';
    } else {
      noFilesMessage.style.display = 'inline';
    }
  };

  const handleFileUpload = async () => {
    // You can implement the file upload logic here
    console.log('Files ready for upload:', files);
    // Uncomment below code when implementing file upload logic
    let url = "http://localhost:8000/csv-upload"
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });
      // Replace 'your-backend-endpoint' with your actual backend endpoint
      const response = await axios.post(url, formData);
      console.log('Files uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error.response.data);
    }
    
  };

  return (
    <div>
    <Navbar />
    <div className='contains'>
      <div className="upload-files-container">
        <div
          className="upload-files-drop-area"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>Drag & drop CSV files here</p>
          <img src={dragdropIcon} alt="Drag and drop icon" className="drag-drop-icon" />
        </div>
        <div className="upload-files-input-area">
          <label for="fileInput" class="btn">
            <span>Choose Files</span>
            <input id="fileInput" className="upload-files-input" type="file" multiple accept='.csv' onChange={handleFileSelect} name='files' />
          </label>
          <br />
          <span id="noFilesMessage" className="no-files-message">No files chosen</span>
        </div>
        <div className="upload-files-list">
          {files.map((file, index) => (
            <div key={index} className="upload-files-list-item">
              <p>File {index + 1}: {file.name}</p>
            </div>
          ))}
        </div>

      </div>
      <button className="upload-files-button" disabled={files.length === 0} onClick={handleFileUpload}>Upload Files</button>
    </div>
    </div>
  );
};

export default UploadFiles;
