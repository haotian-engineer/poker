import styled from "styled-components";

export const EmptySeat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 85px;
  height: 85px;
  padding: 1rem;
  border-radius: 85px;
  background: rgb(255 255 255 / 18%);
  border: 2px solid #000;
  transition: all 0.1s;
  p {
    margin-bottom: 0;
  }
`;
