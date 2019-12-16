import React from "react";
import styled from "styled-components";
import { inputBorder } from "../constants";

const Input = styled.input`
  width: 80%;
  padding: 0.6rem;
  font-size: 1.3rem;
  margin-top: 0.8rem;
  border-radius: 0.5rem;
  border: ${inputBorder};
  outline: none;
  text-align: center;
`;

export const ReadOnlyInput = ({ value }: { value: string }) => {
  return <Input type="text" readOnly={true} value={value} />;
};
