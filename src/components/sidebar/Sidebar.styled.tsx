import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import '../../assets/css/foundation/variables.css';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 240px;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-240px')};
  background-color: var(--gray-color);
  z-index: 1100;
  overflow-x: hidden;
  transition: left 0.3s;

  @media (min-width: 1022px) {
    left: 0;
  }
`;

export const LogoContainer = styled.div`
  background-color: rgb(17 24 39);
  padding: 1px;
  height: 54px;

  .nt-sidebar__logo {
    text-align: left;
    padding-left: 12px;
    color: var(--white-color);
  }

  .nt-sidebar__logo--bold {
    font-weight: 900;
  }
`;

export const LinkBox = styled.div`
  background-color: var(--gray-color);

  .nt-sidebar__divider {
    color: rgb(156 163 175);
    text-transform: uppercase;
    font-size: 12px;
    text-align: left;
    padding-left: 12px;
  }
`;

export const SidebarLink = styled(NavLink)`
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--gray-lighter-color);
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    background-color: var(--hover-color);
    color: var(--white-color);
  }

  &.active {
    background-color: var(--hover-color);
    color: var(--white-color);
  }

  .nt-sidebar_menu-icon {
    width: 20px;
    height: 20px;
    fill: var(--gray-lighter-color);
    margin-right: 10px;
  }
`;

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 10px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '10px')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1200;
  transition: left 0.3s;

  svg {
    width: 30px;
    height: 30px;
    color: var(--black-color);
  }

  @media (min-width: 1022px) {
    display: none;
  }
`;
