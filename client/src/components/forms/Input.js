import styled from "styled-components";

export const Input = styled.input`
  height: 55px;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primaryCta};
  width: 314px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.primaryCta};
  }
`;
