import React from "react";
import "./App.css";

import CardPage from "./components/CardPage";
import Start from "./components/Start";
import { cardTypes } from "./enums";

function App() {
  const images = importAllImages(
    require.context("./faces", false, /\.(PNG|png|jpe?g|JPE?G|svg|SVG)$/)
  );

  return (
    <div className="App">
      {images.length === 0 ? <Start /> : null}

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
      {/* The slicing in the following two component prop inputs are because the 
      cards would overflow a page and wouldn't look nice on a printed page. 
      Flexbox and CSS doesn't support page break, so instead we make two 
      Flexbox containers. */}
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
