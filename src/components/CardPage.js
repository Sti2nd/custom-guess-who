import React from "react";
import PropTypes from "prop-types";

import FaceCard from "./FaceCard";
import SecretCard from "./SecretCard";
import styled from "styled-components";
import { CARD_TYPES } from "../constants/enums";

function CardPage(props) {
  // A list with a card for each face. Type of card is decided by the cardType
  // prop.
  const renderedFaces = props.faces.map((face, index) => {
    if (props.cardType === CARD_TYPES.FACE_CARD) {
      return <FaceCard color={props.color} src={face} key={index} />;
    } else if (props.cardType === CARD_TYPES.SECRET_CARD) {
      return <SecretCard color={props.color} src={face} key={index} />;
    } else {
      return <></>;
    }
  });

  // Decide if we should add the newPage class or not
  const newPageClass = props.newPage ? "newPage" : "";

  return (
    <StyledCardPage className={newPageClass}>{renderedFaces}</StyledCardPage>
  );
}

CardPage.propTypes = {
  faces: PropTypes.array.isRequired,
};

CardPage.defaultProps = {
  cardType: CARD_TYPES.FACE_CARD,
  color: "blue",
};

const StyledCardPage = styled.div.attrs({ className: "page" })`
  display: flex;
  flex-wrap: wrap;
`;

export default CardPage;
