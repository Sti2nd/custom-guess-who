import React from "react";
import PropTypes from "prop-types";

import CardPage from "./CardPage";
import { cardTypes } from "../enums";

function PrintPage(props) {
  return (
    <>
      {props.faces.length === 0 && <div>Put images into the 'faces' folder!</div>}
      <CardPage
        cardType={cardTypes.FACE_CARD}
        color="player1Color"
        faces={props.faces}
        newPage={false}
      />
      <CardPage
        cardType={cardTypes.FACE_CARD}
        color="player2Color"
        faces={props.faces}
        newPage={true}
      />
      {/* The slicing in the following two component prop inputs are because the 
      cards would overflow a page and wouldn't look nice on a printed page. 
      Flexbox and CSS doesn't support page break, so instead we make two 
      Flexbox containers. */}
      <CardPage
        cardType={cardTypes.SECRET_CARD}
        color="secretColor"
        faces={props.faces.slice(0, 12)}
        newPage={true}
      />
      <CardPage
        cardType={cardTypes.SECRET_CARD}
        color="secretColor"
        faces={props.faces.slice(12)}
        newPage={true}
      />
    </>
  );
}

PrintPage.propTypes = {
  faces: PropTypes.array.isRequired,
};

export default PrintPage;
