import React from "react";
import styled from "styled-components";
import BaseCard, { CardProps } from "./BaseCard";

function SecretCard(props: CardProps) {
  return (
    <SecretCardStyle className="secretCard">
      <BaseCard {...props} />
    </SecretCardStyle>
  );
}

const SecretCardStyle = styled.div`
  display: flex;
  height: 73mm;
  width: 36mm;
  margin: 0.5px;

  .imageContainer {
    margin: 5mm 3mm;
  }

  .nameContainer {
    height: 16mm;
    font-size: 1.5rem;
    color: gold;
  }
`;

export default SecretCard;
