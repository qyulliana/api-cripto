import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #fff;
  background-color: red;
  padding: 10px;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;