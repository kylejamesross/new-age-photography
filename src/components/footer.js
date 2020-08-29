import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkLynxWhite};
  font-size: 0.7rem;
  height: 30px;
  box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
    0 7px 10px -5px rgba(0, 0, 0, 0.15);
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, New Age Photography All right reserved{" "}
  </StyledFooter>
);

export default Footer;
