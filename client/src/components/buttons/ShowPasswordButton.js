import React from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeShowIcon from "../icons/EyeShowIcon";
import styled from "styled-components";

const StyledShowPasswordButton = styled.div`
  position: absolute;
  z-index: 40;
  right: 12px;
  bottom: 17px;
  cursor: pointer;
  svg {
    width: 30px;
  }
`;

const ShowPasswordButton = (props) => {
  const { showPassword, setShowPassword } = props;
  return (
    <StyledShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <EyeShowIcon /> : <EyeIcon />}
    </StyledShowPasswordButton>
  );
};

export default ShowPasswordButton;
