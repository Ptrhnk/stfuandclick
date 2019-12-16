import React from "react";
import styled from "styled-components";

import { orderColumnWidth, clicksColumnPadding } from "../../constants";

const Heading = styled.div`
  width: 100%;
  color: grey;
  padding-left: ${orderColumnWidth};
  padding-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Clicks = styled.div`
  padding: ${clicksColumnPadding};
`;

const ContentHeading = () => {
  return (
    <Heading>
      <div>{"TEAM"}</div>
      <Clicks>{"CLICKS"}</Clicks>
    </Heading>
  );
};

export default ContentHeading;
