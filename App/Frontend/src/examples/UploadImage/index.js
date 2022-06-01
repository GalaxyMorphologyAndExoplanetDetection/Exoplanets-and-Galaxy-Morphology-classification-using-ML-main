import React from "react";
import "./styles.css";

function UploadImage() {
  return (
    <div id="upload-box">
      {/* <input type="file" onChange={handleUpload} /> */}
      <form
        action="http://127.0.0.1:5000/galaxy"
        method="post"
        id="upload-form"
        encType="multipart/form-data"
      >
        <input type="file" name="imagefile" id="imagefile" />
        <input type="submit" />
      </form>
      {/* <MKTypography variant="body1" color="text">
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size(Bytes): {file.size} </p>
      </MKTypography> */}
    </div>
  );
}

// function ImageThumb(image) {
//   return <img src={URL.createObjectURL(image)} alt="Galaxy Thumbnail" />;
// }

export default UploadImage;
