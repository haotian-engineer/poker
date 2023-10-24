import React from "react";
import styled from "styled-components";
import { ReactComponent as IconNavbar } from "../assets/icons/nav-icon.svg";
import { ReactComponent as IconHome } from "../assets/icons/home-icon.svg";
import { ReactComponent as IconLogo } from "../assets/icons/logo-icon.svg";
import { ReactComponent as IconWallet } from "../assets/icons/wallet-icon.svg";
import { ReactComponent as IconNotify } from "../assets/icons/notify-icon.svg";
import { ReactComponent as IconSetting } from "../assets/icons/setting-icon.svg";
import { ReactComponent as IconAvatar } from "../assets/icons/avatar-icon.svg";
import { ReactComponent as IconArrow } from "../assets/icons/arrow-icon.svg";

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  background-color: transparent;
`;

const IconSimpleWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  align-items: center;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 13px 16px 13px 16px;
  background-color: #333541;
  border-radius: 12px;
  width: 50px;
  height: 50px;
`;

const LabelWrapper = styled.div`
  position: relative;
  width: 140px;
  padding: 4px 8px 4px 8px;
  border: solid #fff 1px;
  gap: 4px;
  height: 41px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  line-height: 32px;
  background-color: rgba(255, 255, 255, 0.04);
`;

const LabelBar = styled.div`
  position: absolute;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 80px;
  height: 7px;
  left: 31px;
  bottom: -2px;
  background: #0f0f0f;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameWrapper = styled.span`
  font-weight: 400;
  color: #ffffff;
  font-size: 12px;
`;

const AMDWrapper = styled.span`
  font-weight: 400;
  color: #ff6b00;
  font-size: 10px;
`;

const USDWrapper = styled.span`
  font-weight: 400;
  color: #878282;
  font-size: 10px;
`;

const Bar = styled.div`
  height: 30px;
  width: 2px;
  background-color: #3b3b3b;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <FlexWrapper gap="15px">
        <IconSimpleWrapper>
          <IconNavbar />
        </IconSimpleWrapper>
        <IconSimpleWrapper>
          <IconHome />
        </IconSimpleWrapper>
        <LabelWrapper>
          15/30 NLH
          <LabelBar />
        </LabelWrapper>
        <LabelWrapper>
          .50/1 PL06
          <LabelBar />
        </LabelWrapper>
      </FlexWrapper>
      {props.dashboard && (
        <IconSimpleWrapper>
          <IconLogo />
        </IconSimpleWrapper>
      )}
      <FlexWrapper gap="30px">
        <FlexWrapper gap="10px">
          <IconWrapper>
            <IconWallet />
          </IconWrapper>
          <IconWrapper>
            <IconNotify />
          </IconWrapper>
          <IconWrapper>
            <IconSetting />
          </IconWrapper>
        </FlexWrapper>
        <Bar></Bar>
        <FlexWrapper gap="10px">
          <IconAvatar />
          <ProfileWrapper>
            <NameWrapper>Taz Kingston</NameWrapper>
            <AMDWrapper>158.60 AMD</AMDWrapper>
            <USDWrapper>$ 2.90</USDWrapper>
          </ProfileWrapper>
          <IconArrow />
        </FlexWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
