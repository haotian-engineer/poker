import styled, { css } from "styled-components";

const SitButton = styled.button`
  text-align: center;
  background-color: rgba(255,255,255,0.04);
  border-radius: 85px;
  border: solid #fff 1px;
  color: #FFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  height: 85px;
  cursor: pointer;
  transition: all 0.3s;
  width: 85px;

  &:visited {
    background-color: #333541;
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  &:hover,
  &:active {
    background-color: #333541;
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  &:disabled {
    background-color: grey;
    border-color: 2px solid grey;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #e06303;
      font-size: 15px;
      color: ${(props) => props.theme.colors.primaryCta};
      padding: ${(props) => {
        if (props.large) return "calc(1rem - 2px) calc(2rem - 2px)";
        else if (props.small) return "calc(0.5rem - 2px) calc(1rem - 2px)";
        else return "calc(0.75rem - 2px) calc(1.5rem - 2px)";
      }};

      &,
      &:visited {
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:hover,
      &:active {
        background-color: ${(props) => props.theme.colors.primaryCtaDarker};
        border-color: ${(props) => props.theme.colors.primaryCtaDarker};
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:focus {
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:disabled {
        background-color: grey;
        border-color: grey;
        color: ${(props) => props.theme.colors.fontColorDark};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.primaryCta};

      &,
      &:visited {
        border: 2px solid ${(props) => props.theme.colors.primaryCta};
        background-color: transparent;
        color: ${(props) => props.theme.colors.primaryCta}};
      }

      &:hover,
      &:active {
        border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
        background-color: transparent;
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:disabled {
        border: 2px solid grey;
        background-color: grey;
        color: ${(props) => props.theme.colors.fontColorDark};
      }
    `}
  }
`;

export default SitButton;
