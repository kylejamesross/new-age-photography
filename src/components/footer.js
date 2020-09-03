import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkLynxWhite};
  font-size: 0.7rem;
  height: 30px;
  box-shadow: 0 0.125rem 0.625rem -0.1875rem rgba(0, 0, 0, 0.1);
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, New Age Photography All right reserved{" "}
  </StyledFooter>
);

export default Footer;
