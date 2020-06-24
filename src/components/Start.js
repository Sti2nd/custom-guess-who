import React from "react";

import PrintPage from "./PrintPage";
import FaceDetection from "./FaceDetection";

function Start(props) {
  if (props.runFaceDetection){
    return <FaceDetection faces={props.images} />;
  } else {
    return <PrintPage faces={props.images} />;
  }
}

export default Start;
