import styled, { css } from "styled-components";

const GameUIButton = styled.button`
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

export default GameUIButton;
