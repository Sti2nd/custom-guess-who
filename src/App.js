import React from "react";
import "./App.css";

import Start from "./components/Start";


function App() {
  let runFaceDetection = true;

  const images = importAllImages(
    require.context("./faces", false, /\.(PNG|png|jpe?g|JPE?G|svg|SVG)$/)
  );

  return (
    <div className="App">
      <Start images={images} runFaceDetection={runFaceDetection}/>
    </div>
  );
};

/**
 * Import all images from the folder /src/faces/ by using WebPack require.
 * https://webpack.js.org/guides/dependency-management/#context-module-api
 * @param {Function} r The request
 * @returns {Array}
 */
function importAllImages(r) {
  return r.keys().map(r);
}

export default App;
