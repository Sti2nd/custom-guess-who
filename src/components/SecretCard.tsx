import React from "react";
import styled from "styled-components";

import { getFileNameFromPath } from "../util/toolbox";

interface CardProps {
  color: string;
  src: string;
}

function SecretCard({ color, src }: CardProps) {
  return (
    <StyledSecretCard className={`secretCard ${color}`}>
      <div className="imageContainer">
        <img src={src} alt="face"></img>
      </div>
      <div className="nameContainer">
        <span>{getFileNameFromPath(src)}</span>
      </div>
    </StyledSecretCard>
  );
}

const StyledSecretCard = styled.div`
  height: 73mm;
  width: 36mm;
  margin: 0.5px;

  .imageContainer {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5mm 3mm;
  }

  .nameContainer {
    width: calc(100% - 6mm);
    height: 16mm;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    font-size: 1.5rem;
    color: gold;
    margin: auto;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export default SecretCard;
