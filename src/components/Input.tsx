import React from "react";
import styled from "styled-components";
import { inputBorder } from "../constants";

const Container = styled.div`
  width: 50%;
`;

const StyledInput = styled.input`
  border-radius: 0.5rem;
  height: 5rem;
  outline: none;
  font-size: 1.8rem;
  width: 100%;
  border: ${inputBorder};
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
`;

interface Input {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Input> = ({ value, onChange }) => {
  return (
    <Container>
      <Title>{"Enter your team name:"}</Title>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Nerds.."
      />
    </Container>
  );
};
