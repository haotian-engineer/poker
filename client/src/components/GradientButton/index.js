import React from "react";
import styled from "styled-components";

const StyledGradientButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background: ${(props) =>
    props.fill
      ? "linear-gradient(90deg, #db387c 6.49%, #f65a47 92.91%);"
      : "transparent;"} 
  text-align: center;
  border: ${(props) => (props.fill ? "0px;" : "1px solid #DD3A79;")} 
  font-family: IBM Plex Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  cursor: pointer;
`;

const GradientButton = (props) => {
  return (
    <StyledGradientButton
      width={props.width}
      height={props.height}
      fill={props.fill}
      radius={props.radius}
      onClick={props.handleClick}
    >
      {props.value}
    </StyledGradientButton>
  );
};

export default GradientButton;
