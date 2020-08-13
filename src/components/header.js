import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  padding: 1rem 0;
  z-index: 1;
`;

const HeaderNav = styled.nav`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
`;

const HeaderNavItems = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderNavItem = styled.li`
  margin: 0;
`;

const HeaderNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lynxWhite};
  text-shadow: 0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 0.3);
  &:hover {
    color: ${({ theme }) => theme.colors.hoverLynxWhite};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderNav>
        <HeaderNavItems>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/">Home</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/">About</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/">Weddings</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/">Engagement</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/">Contact</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNavItems>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
