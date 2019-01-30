import React from "react";
import styled from "styled-components";

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
`;

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
  background-image: url(${props => props.image});
  background-size: 80px;
  background-position: center;
`;

const CellTitle = styled.div``;

const Cell = props => {
  return (
    <CellGroup>
      <CellImage image={props.image} />
      <CellTitle>{props.title}</CellTitle>
    </CellGroup>
  );
};

export default Cell;
