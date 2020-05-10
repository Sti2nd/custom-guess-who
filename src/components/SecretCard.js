import React from "react";
import styled from "styled-components";

import { getFileNameFromPath } from "../toolbox";

function SecretCard(props) {
  return (
    <StyledSecretCard className={props.color}>
      <div className="imageContainer">
        <img src={props.src} alt="face"></img>
      </div>
      <div className="nameContainer">
        <span>{getFileNameFromPath(props.src)}</span>
      </div>
    </StyledSecretCard>
  );
}

const StyledSecretCard = styled.div.attrs({className: "faceCard"})`
  height: 70mm;
  width: 35mm;
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
