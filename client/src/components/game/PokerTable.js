import React from "react";
import styled from "styled-components";
import table from "../../assets/img/bord1.png";

const StyledPokerTable = styled.img`
  width: 63%;
  height: 77%;
  position: absolute;
  top: 13%;
  display: block;
  pointer-events: none;
  margin: 0 auto;
`;

const PokerTable = () => <StyledPokerTable src={table} alt="Poker Table" />;

export default PokerTable;
