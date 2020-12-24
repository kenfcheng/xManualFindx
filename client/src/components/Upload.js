import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { auth } from "../firebase";

import Dropzone from "./Dropzone";

function Upload() {
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target);
    console.log(e.target.files);

    const storageRef = auth.storage().ref;
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded File", file.name);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Card>
        <Dropzone />
        <p>OR</p>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <input type="file" onChange={onFileChange} />
            <input type="text" name="Object" placeholder="OBJECT" />
            <input type="text" name="model" placeholder="MODEL" />
            <input type="text" name="brand" placeholder="BRAND" />
            <input type="text" name="year" placeholder="YEAR" />
            <Button disabled={loading} className="w-100" type="submit">
              Upload
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/">Cancel</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Upload;
