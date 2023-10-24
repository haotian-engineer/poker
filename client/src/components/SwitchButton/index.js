import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.label`
  display: flex;
  margin-top: 13px;

  & input {
    display: none;
  }

  & small {
    display: inline-block;
    width: 36px;
    height: 14px;
    background: #181a26;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }
  & small:before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: linear-gradient(180deg, #db387c 0%, #f65a48 100%);
    border-radius: 50%;
    top: -2px;
    left: -1px;
    transition: 0.3s;
    box-shadow: -3px 0 3px rgba(0, 0, 0, 0.25);
  }

  & input:checked ~ small {
    background: #181a26;
    transition: 0.3s;
  }

  & input:checked ~ small:before {
    transform: translate(20px, 0px);
    transition: 0.3s;
    box-shadow: 3px 0 3px rgba(0, 0, 0, 0.25);
  }

  & span {
    color: #fff;
    font-family: IBM Plex Mono;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 109.091% */
    text-transform: capitalize;
    margin-left: 16px;
  }
`;

const SwitchButton = (props) => {
  return (
    <StyledSwitch class="switchSmall2">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <small></small>
      <span>{props.label}</span>
    </StyledSwitch>
  );
};

export default SwitchButton;
