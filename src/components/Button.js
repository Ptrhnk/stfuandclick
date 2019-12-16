import React from "react";
import styled from "styled-components";

import { appliftingBlue, appliftingBlueHover, globalWhite } from "../constants";

const ClickBtn = styled.button`
  width: ${({ small }) => (small ? "40%" : "100%")};
  background-color: ${appliftingBlue};
  color: ${globalWhite};
  border-radius: 0.5rem;
  padding: 3.4rem 0;
  padding: ${({ small }) => (small ? "1.4rem 0" : "3.4rem 0")};
  font-size: 3.6rem;
  letter-spacing: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${appliftingBlueHover};
  }
`;

export const Button = ({ onClick, small }) => {
  return (
    <ClickBtn onClick={onClick} small={small}>
      {" "}
      CLICK!{" "}
    </ClickBtn>
  );
};
