import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div className="settings-chooseimg" {...getRootProps()}>
      <p>
        Choose Photo
        <input {...getInputProps()} />
      </p>
    </div>
  );
};

export default Dropzone;
