import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { NavbarContainer, TimeDisplay, DropdownButton, DropdownText, CustomMenu, CustomMenuItem } from './Navbar.styled';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(format(now, 'HH:mm:ss'));
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer position="fixed">
      <Toolbar style={{ paddingLeft: 0, width: '100%' }}>
        <TimeDisplay variant="h6">{currentTime}</TimeDisplay>
        <DropdownButton onClick={handleMenu}>
          <MenuIcon />
          <DropdownText>SQLite Links</DropdownText>
          <KeyboardArrowDownIcon />
        </DropdownButton>
        <CustomMenu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <CustomMenuItem onClick={handleClose}>
            <a href='https://blog.cloudflare.com/d1-turning-it-up-to-11/' target='_blank'>
                <InsertLinkIcon />
                Reintroducing D1
            </a>
          </CustomMenuItem>
          <CustomMenuItem onClick={handleClose}>
            <a href='https://www.sqlite.org/lang.html' target='_blank'>
                <InsertLinkIcon />
                SQLite SQL Flavour
            </a>
          </CustomMenuItem>
          <CustomMenuItem onClick={handleClose}>
            <a href='https://developers.cloudflare.com/durable-objects/' target='_blank'> 
                <InsertLinkIcon />
                Durable Objects
            </a>
          </CustomMenuItem>
        </CustomMenu>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
