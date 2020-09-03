import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Icon from "../assets/hamburger.svg";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const StyledHeader = styled.header`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  background-color: ${({ isFixed, theme }) =>
    isFixed ? theme.colors.white : "transparent"};
  top: 0;
  width: 100%;
  padding: 0.5rem;
  z-index: 1;
  box-shadow: ${({ isFixed }) =>
    isFixed ? "0 0.125rem 0.625rem -0.1875rem rgba(0,0,0,0.1)" : "none"};
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
  color: ${({ theme, isFixed }) =>
    isFixed ? "#5d5d5d" : "rgba(255, 255, 255, 0.8)"};
  &:visited {
    color: ${({ theme, isFixed }) =>
      isFixed ? "#5d5d5d" : "rgba(255, 255, 255, 0.8)"};
  }
  &:hover {
    color: ${({ theme, isFixed }) =>
      isFixed ? "#7d7d7d" : "rgba(255, 255, 255, 0.9)"};
  }
  &:before {
    display: none;
  }
`;

const HamburgerIcon = styled(Icon)`
  width: 3.5rem;
  cursor: pointer;
  margin: 0 0 0 auto;
  fill: ${({ theme, isFixed }) =>
    isFixed ? theme.colors.lightDraculaOrchid : "rgba(255, 255, 255, 0.8)"};
  &:hover {
    fill: ${({ theme, isFixed }) =>
      isFixed ? theme.colors.draculaOrchid : "rgba(255, 255, 255, 0.9)"};
  }
  @media (min-width: 720px) {
    display: none;
  }
`;

const Header = () => {
  const [open, setState] = useState(false);

  const onClick = () => setState(!open);

  const { y: scrollY } = useWindowScrollPosition({ throttle: 100 });

  const isFixed = scrollY >= 500;

  return (
    <StyledHeader isFixed={isFixed}>
      <HeaderNav>
        <HeaderNavItems open={open}>
          <HeaderNavItem>
            <HeaderNavLink to="/" isFixed={isFixed}>
              Home
            </HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/about/" isFixed={isFixed}>
              About
            </HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/" isFixed={isFixed}>
              Weddings
            </HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/engagements/" isFixed={isFixed}>
              Engagement
            </HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/weddings/" isFixed={isFixed}>
              Contact
            </HeaderNavLink>
          </HeaderNavItem>
        </HeaderNavItems>
        <HamburgerIcon onClick={onClick} isFixed={isFixed} />
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
