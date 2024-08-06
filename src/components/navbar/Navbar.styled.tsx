import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import '../../assets/css/foundation/variables.css';

export const NavbarContainer = styled(AppBar)`
  display: flex;
  background-color: white !important;
  box-shadow: none !important;
  z-index: 1000;
  width: calc(100% - 240px);
  margin-left: 240px;
  border-bottom: 1px solid var(--gray-lightest-color);
  height: 56px !important;
  font-family: var(--font-family) !important;
  overflow-x: hidden;
`;

export const CustomToolbar = styled(Toolbar)`
  height: 56px !important;
  min-height: 56px !important;
  display: flex;
  align-items: center;
  padding-left: 0 !important;
  width: 100%;
`;

export const TimeDisplay = styled(Typography)`
  color: rgb(31 41 55);
  padding-left: 275px;
  font-size: 16px !important;
  flex-grow: 1;
  font-family: var(--font-family) !important;

 
`;

export const DropdownButton = styled(Button)<{ menuOpen: boolean }>`
  display: flex !important;
  color: ${({ menuOpen }) => (menuOpen ? 'var(--link-color)' : 'var(--black-color)')} !important;
  text-transform: none !important;
  font-size: 16px !important;
  margin-right: 15px !important;
  font-family: var(--font-family) !important;

  &:focus,
  &:active {
    color: var(--link-color) !important;
  }

  @media (max-width: 1021px) {
    display: none !important;
  }
`;

export const DropdownText = styled.span`
  padding-left: 8px;
  &:focus,
  &:active {
    color: var(--link-color) !important;
  }

  @media (max-width: 1021px) {
    display: none !important;
  }
`;

export const MoreButton = styled(Button)`
  display: none !important;

  @media (max-width: 1021px) {
    display: flex !important;
    color: var(--black-color) !important;
    text-transform: none !important;
    font-size: 16px !important;
    font-family: var(--font-family) !important;
    margin-left: auto !important;

    &:focus,
    &:active {
      color: var(--link-color) !important;
    }
  }
`;

export const CustomMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: 6px;
    margin-left: 20px;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .875rem !important;
  font-weight: 500 !important;
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    background-color: transparent !important;
  }
  .MuiSvgIcon-root {
    font-size: 20px;
  }
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: black;
    text-decoration: none;
    width: 100%;
  }
`;