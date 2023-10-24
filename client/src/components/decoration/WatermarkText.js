import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const WatermarkTextWrapper = styled.div`
  position: fixed;
  left: 40vw;
  top: 10vh;
  z-index: -99;
  overflow-x: hidden;
`;

const WatermarkText = () => <WatermarkTextWrapper></WatermarkTextWrapper>;

export default WatermarkText;
