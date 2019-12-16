import styled from "styled-components";
import {
  appliftingBlue,
  globalWhite,
  contentRowOne,
  contentRowTwo
} from "../../constants";

const Row = styled.div<{ current: boolean; order: number }>`
  width: 100%;
  min-height: 10%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;

  background-color: ${({ current, order }) =>
    current
      ? `${appliftingBlue}`
      : order % 2
      ? `${contentRowOne}`
      : `${contentRowTwo}`};
  font-size: ${({ current }) => (current ? "2.6rem" : "1.5rem")};
  font-weight: ${({ current }) => (current ? "600" : "400")};
  color: ${({ current }) => (current ? `${globalWhite}` : " black")};
  overflow: hidden;
`;

export default Row;
