import React from "react";
import styled from "@emotion/styled";

const StyledH2 = styled.h2`
  text-align: center;
  padding: 1.4rem;
  margin: 0;
  color: ${props =>
    props.isLight
      ? props.theme.colors.white
      : props.theme.colors.draculaOrchid};

  svg {
    justify-content: center;
    display: flex;
    border-top: 10px solid transparent;
    width: 100px;
    margin: 0 auto;
    path {
      fill: ${props =>
        props.isLight
          ? props.theme.colors.white
          : props.theme.colors.draculaOrchid};
    }
  }
`;

const H2 = ({ children, isLight }) => (
  <StyledH2 isLight={isLight}>
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 657.83 24.93">
      <path d="M289.38 23.14c12.09-1.85 10-19.23 0-21.35C194.89 11.66 97.86 8.54 0 12.84c97.39 4.46 192-1.68 289.38 10.3zM340.78 12.47c0 6.88-5.32 12.46-11.87 12.46S317 19.35 317 12.47 322.35 0 328.91 0s11.87 5.58 11.87 12.47zM368.45 23.14c-12.09-1.85-10-19.23 0-21.35C462.94 11.66 560 8.54 657.83 12.84c-97.4 4.46-191.99-1.68-289.38 10.3z" />
    </svg>
  </StyledH2>
);
export default H2;
