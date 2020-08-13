import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Icon from "../assets/hamburger.svg";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  padding: 1rem;
  z-index: 1;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: flex-start;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  width: 100%;
`;

const HeaderNavItems = styled.ul`
  list-style: none;
  margin: 0;
  max-height: ${props => (props.open ? "999px" : "0")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  overflow: hidden;
  transition: max-height 0.3s;
  justify-content: space-between;
  @media (min-width: 720px) {
    visibility: visible;
    max-height: 999px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const HeaderNavItem = styled.li`
  margin: 0;
  padding: 1rem 0;
`;

const HeaderNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lynxWhite};
  text-shadow: 0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 0.3);
  &:hover {
    color: ${({ theme }) => theme.colors.hoverLynxWhite};
  }
`;

const HamburgerIcon = styled(Icon)`
  width: 3.5rem;
  cursor: pointer;
  margin: 0 0 0 auto;
  path {
    fill: ${({ theme }) => theme.colors.lynxWhite};
  }
  @media (min-width: 720px) {
    display: none;
  }
`;

const Header = () => {
  const [open, setState] = useState(false);

  const onClick = () => setState(!open);

  return (
    <StyledHeader>
      <HeaderNav>
        <HeaderNavItems open={open}>
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
        <HamburgerIcon onClick={onClick} />
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
