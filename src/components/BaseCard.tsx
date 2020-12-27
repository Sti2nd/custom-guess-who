import React from "react";
import styled from "styled-components";
import { getFileNameFromPath } from "../util/toolbox";

export interface CardProps {
  color: string;
  src: string;
}

function BaseCard({ color, src }: CardProps) {
  return (
    <StyledBaseCard className={`card ${color}`}>
      <div className="imageContainer">
        <img src={src} alt="face"></img>
      </div>
      <div className="nameContainer">
        <span>{getFileNameFromPath(src)}</span>
      </div>
    </StyledBaseCard>
  );
}

export const StyledBaseCard = styled.div`
  margin: 0.5px;
  height: 100%;

  .imageContainer {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nameContainer {
    width: calc(100% - 6mm);
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

export default BaseCard;