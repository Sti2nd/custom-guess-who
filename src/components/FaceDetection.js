import React, { useEffect } from "react";

import * as faceapi from "face-api.js";

function FaceDetection(props) {
  let imageRef = React.createRef();
  let image = <img className="faceDetectImage" src={props.faces[0]} alt="face" ref={imageRef} />;
  let canvasRef = React.createRef();
  let canvas = <canvas className="faceDetectCanvas" ref={canvasRef}/>

  useEffect(() => {
    faceapi.nets.ssdMobilenetv1
      .loadFromUri(process.env.PUBLIC_URL + "/models")
      .then(() => {
        console.log("loaded net!");
        faceapi.detectAllFaces(imageRef.current).then((detections) => {
          console.log("detected:", detections);
          const displaySize = {
            width: imageRef.current.width,
            height: imageRef.current.height,
          };
          faceapi.matchDimensions(canvasRef.current, displaySize);
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        });
      });
  }, []);

  return (
    <>
      {image}
      {canvas}
    </>
  );
}

export default FaceDetection;
