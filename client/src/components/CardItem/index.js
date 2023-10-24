import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 25%;
  height: 123px;
  border-radius: 8px;
  border: 2px solid #333541;
  background-color: #212531;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;

const TitleWrapper = styled.span`
  font-weight: 700;
  color: #ffffff;
  font-size: 14px;
`;

const DescWrapper = styled.span`
  margin-top: 10px;
  font-weight: 400;
  color: #b6b7bb;
  font-size: 9px;
  line-height: 11.7px;
  text-align: center;
`;

const CardItem = (props) => {
  return (
    <CardWrapper>
      <img
        src={props.imgUrl}
        alt={props.title}
        style={{ width: props.width, height: props.height }}
      />
      <TitleWrapper>{props.title}</TitleWrapper>
      <DescWrapper>{props.desc}</DescWrapper>
    </CardWrapper>
  );
};

export default CardItem;
