import React from "react";
import styled from "styled-components";

import CardPage from "./components/CardPage";
import Start from "./components/Start";
import { CARD_TYPES, CARD_COLOUR } from "./constants/enums";

function App() {
  const images = importAllImages(
    require.context("./faces", false, /\.(PNG|png|jpe?g|JPE?G|svg|SVG)$/)
  );

  return (
    <StyledApp>
      {images.length === 0 && <Start />}

      <CardPage
        cardType={CARD_TYPES.FACE_CARD}
        color={CARD_COLOUR.PLAYER_1}
        faces={images}
        newPage={false}
      />
      <CardPage
        cardType={CARD_TYPES.FACE_CARD}
        color={CARD_COLOUR.PLAYER_2}
        faces={images}
        newPage={true}
      />
      {/* The slicing in the following two component prop inputs are because the 
      cards would overflow a page and wouldn't look nice on a printed page. 
      Flexbox and CSS doesn't support page break, so instead we make two 
      Flexbox containers. */}
      <CardPage
        cardType={CARD_TYPES.SECRET_CARD}
        color={CARD_COLOUR.SECRET}
        faces={images.slice(0, 12)}
        newPage={true}
      />
      <CardPage
        cardType={CARD_TYPES.SECRET_CARD}
        color={CARD_COLOUR.SECRET}
        faces={images.slice(12)}
        newPage={true}
      />
    </StyledApp>
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

const StyledApp = styled.div.attrs({className: "App"})`
  .player1Color, .player1Color nameContainer {
    background: rgb(0, 0, 117);
    color: rgb(0, 0, 117);
  }

  .player2Color, .player2Color nameContainer {
    background: #E10000;
    color: #E10000;
  }

  .secretColor {
    background: gold;
  }

  .newPage {
    break-before: page;
  }
`;

export default App;
