import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import { useDropzone } from "react-dropzone";

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  console.log("Dropped!", onDrop);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#root");

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn s12 m4">
          Click to Drag n' Drop
        </button>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="grey lighten-1"
        >
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Dropzone;
