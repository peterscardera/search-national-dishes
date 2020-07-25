import React from "react";
import styled from "@emotion/styled";

const StyledT = styled.h1`
  font-size: 8rem;
  color: darkgray;
  margin: 0;
  font-family: 'Teko', sans-serif;
`;

const Title = () => {
  return <StyledT>Search for food</StyledT>;
};
export default Title;
