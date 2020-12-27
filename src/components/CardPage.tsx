import React from "react";

import FaceCard from "./FaceCard";
import SecretCard from "./SecretCard";
import styled from "styled-components";
import { CARD_TYPES } from "../constants/enums";

interface CardPageProps {
  faces: Array<string>;
  cardType: CARD_TYPES;
  color: string;
  newPage: boolean;
}

function CardPage({
  faces,
  cardType,
  color = "blue",
  newPage = false,
}: CardPageProps) {
  const renderedFaces = faces.map((face, index) => {
    if (cardType === CARD_TYPES.FACE_CARD) {
      return <FaceCard color={color} src={face} key={index} />;
    } else if (cardType === CARD_TYPES.SECRET_CARD) {
      return <SecretCard color={color} src={face} key={index} />;
    } else {
      return <></>;
    }
  });

  // Decide if we should add the newPage class for page break
  const newPageClass = newPage ? "newPage" : "";

  return (
    <StyledCardPage className={`page ${newPageClass}`}>
      {renderedFaces}
    </StyledCardPage>
  );
}

const StyledCardPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CardPage;
