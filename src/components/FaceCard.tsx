import React from "react";
import styled from "styled-components";
import BaseCard, { CardProps } from "./BaseCard";

function FaceCard(props: CardProps) {
  return (
    <StyledFaceCard className="faceCard">
      <BaseCard {...props} />
    </StyledFaceCard>
  );
}

const StyledFaceCard = styled.div`
  width: 28mm;
  height: 50mm;

  .imageContainer {
    margin: 3mm;
    margin-bottom: 2mm;
  }

  .nameContainer {
    height: 6mm;
  }
`;

export default FaceCard;
