import styled from "styled-components";
import { appliftingBlue, globalWhite } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  height: 90%;
  border-radius: 0.8rem;
  max-width: 42%;
  border: 5px solid ${appliftingBlue};
  background-color: ${globalWhite};
  overflow: hidden;

  @media (max-width: 1200px) {
    min-width: 60%;
  }
  @media (max-width: 900px) {
    min-width: 90%;
  }
`;

export default Container;
