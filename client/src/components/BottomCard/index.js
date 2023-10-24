import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin-top: 12px;
  padding: 13px 16px 13px 16px;
  border: 1px solid #232531;
  border-radius: 12px;
  background-color: #323846;
  width: 25%;
  height: 79px;
  color: #fff;
  display: flex;
  flex-direction: column;
  & .title {
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
  }

  & .value {
    margin-top: 4px;
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 400;
  }
`;

const BottomCard = (props) => {
  return (
    <CardWrapper>
      <span className="title">{props.title}</span>
      <span className="value">{props.value}</span>
    </CardWrapper>
  );
};

export default BottomCard;
