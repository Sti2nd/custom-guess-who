import React from "react";
import styled from "styled-components";
import { getFileNameFromPath } from "../util/toolbox";

interface CardProps {
  color: string;
  src: string;
}

function FaceCard({ color, src }: CardProps) {
  return (
    <StyledFaceCard className={`faceCard ${color}`}>
      <div className="imageContainer">
        <img src={src} alt="face"></img>
      </div>
      <div className="nameContainer">
        <span>{getFileNameFromPath(src)}</span>
      </div>
    </StyledFaceCard>
  );
}

const StyledFaceCard = styled.div`
  width: 28mm;
  height: 50mm;
  margin: 0.5px;

  .imageContainer {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3mm;
    margin-bottom: 2mm;
  }

  .nameContainer {
    width: calc(100% - 6mm);
    height: 6mm;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    margin: auto;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export default FaceCard;
