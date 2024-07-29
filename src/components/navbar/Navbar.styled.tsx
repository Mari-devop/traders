import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '../../assets/css/foundation/variables.css';

export const NavbarContainer = styled(AppBar)`
  display: flex;
  background-color: white !important;
  box-shadow: none !important;
  z-index: 1000;
  width: calc(100% - 250px);
  margin-left: 250px;
  height: 60px;
`;

export const TimeDisplay = styled(Typography)`
  color: black;
  padding-left: 280px;
  font-size: 16px !important;
  flex-grow: 1;
`;

export const DropdownButton = styled(Button)`
  display: flex;
  color: var(--dark-color) !important;
  text-transform: none !important;
  font-size: 16px !important;
   margin-right: 20px !important;
`;

export const DropdownText = styled.span`
  margin: 0 5px;
`;

export const CustomMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: white;
    box-shadow: none;
    border: 1px solid #ddd;
    margin-top: 9px;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 10px; /* Add gap between icon and text */
  font-size: 14px !important; 
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
