import React from "react";
import PokerChip from "../icons/PokerChip";
import { Input } from "../forms/Input";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  & span {
    font-size: 12px;
    line-height: 15.6px;
    font-weight: 500;
    color: #fff;
  }
`;

const IconWrapper = styled.label`
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 5;
  left: -36px;
  top: 0px;
`;

const ChipsAmountPill = ({ chipsAmount }) => {
  return (
    <Wrapper>
      <IconWrapper htmlFor="chipsAmount">
        <PokerChip width="30" height="30" />
      </IconWrapper>
      <span>{chipsAmount}$</span>
    </Wrapper>
  );
};

ChipsAmountPill.propTypes = {
  chipsAmount: PropTypes.number,
};

export default ChipsAmountPill;
