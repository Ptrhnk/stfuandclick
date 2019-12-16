import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

const StyledInput = styled.input`
  border-radius: 0.5rem;
  height: 5rem;
  outline: none;
  font-size: 1.4rem;
  width: 100%;
  border: 1px solid grey;
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
`;

export const Input = ({ value, onChange }) => {
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
