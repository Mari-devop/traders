import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import '../../assets/css/foundation/variables.css';

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--gray-color);
  z-index: 1100; 
`;

export const LogoContainer = styled.div`
  background-color: var(--dark-color);
  padding: 2px;

  .nt-sidebar__logo {
    text-align: left;
    padding-left: 10px;
    color: var(--white-color);
  }
  
  .nt-sidebar__logo--bold {
    font-weight: 900;
  }
`;

export const LinkBox = styled.div`
  background-color: var(--gray-color);

  .nt-sidebar__divider {
    color: var(--secondary-text-color);
    text-transform: uppercase;
    font-size: 12px;
    text-align: left;
    padding-left: 10px;
  }
`;

export const SidebarLink = styled(NavLink)`
  padding: 8px 15px;
  text-decoration: none;
  font-size: 16px;
  color: var(--gray-lighter-color);
  display: flex;
  align-items: center;
  gap: 10px;
 

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
