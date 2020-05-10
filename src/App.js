import React from "react";
import "./App.css";

import CardPage from "./components/CardPage";
import { cardTypes } from "./enums";

function App() {
  const images = importAllImages(
    require.context("./faces", false, /\.(png|jpe?g|svg)$/)
  );

  let message = null;
  if (images.length === 0) {
    message = "Put images into the 'faces' folder!"
  }

  return (
    <div className="App">
      <CardPage
        cardType={cardTypes.FACE_CARD}
        color="player1Color"
        faces={images}
        newPage={false}
      />
      <CardPage
        cardType={cardTypes.FACE_CARD}
        color="player2Color"
        faces={images}
        newPage={true}
      />
      <CardPage
        cardType={cardTypes.SECRET_CARD}
        color="secretColor"
        faces={images.slice(0, 12)}
        newPage={true}
      />
      <CardPage
        cardType={cardTypes.SECRET_CARD}
        color="secretColor"
        faces={images.slice(12)}
        newPage={true}
      />

      {message}
    </div>
  );
}

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
