import React from "react";
import styled from "@emotion/styled";

const H2 = styled.h2`
  text-align: center;
  padding: 1.4rem;
  margin: 0;
  &:before {
    display: block;
    content: "";
    height: 1px;
    width: 100px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.draculaOrchid};
    position: relative;
    top: 2.3rem;
  }
`;

export default H2;
