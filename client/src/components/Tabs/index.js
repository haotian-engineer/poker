import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 4px;
`;

const TabItem = styled.span`
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  width: 160px;
  background: #333541;
  height: 34px;
  line-height: 28px;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  &.active {
    background: linear-gradient(90deg, #da367f, #f95e42);
  }
`;

const TabDecorator = styled.div`
  position: absolute;
  height: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 96px;
  top: 30px;
  background-color: ${(props) => (props.active ? "#011718" : "#0f0f0f")};
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const Tabs = (props) => {
  return (
    <TabsWrapper>
      {props.items.map((item, idx) => {
        return (
          <TabItem key={idx} className={`${item.active ? `active` : ``}`}>
            {item.name}
            <TabDecorator active={item.active} />
          </TabItem>
        );
      })}
    </TabsWrapper>
  );
};

export default Tabs;
