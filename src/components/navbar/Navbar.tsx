import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { NavbarContainer, CustomToolbar, TimeDisplay, DropdownButton, DropdownText, MoreButton, CustomMenu, CustomMenuItem } from './Navbar.styled';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(format(now, 'hh:mm:ss a'));
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);

  return (
    <NavbarContainer position="fixed">
      <CustomToolbar>
        {windowWidth > 1021 && <TimeDisplay variant="h6">{currentTime}</TimeDisplay>}
        {windowWidth > 1021 ? (
          <DropdownButton menuOpen={menuOpen} onClick={handleMenu}>
            <MenuIcon />
            <DropdownText>SQLite Links</DropdownText>
            <KeyboardArrowDownIcon />
          </DropdownButton>
        ) : (
          <MoreButton onClick={handleMenu}>
            <MoreVertIcon />
          </MoreButton>
        )}
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
          open={menuOpen}
          onClose={handleClose}
        >
          <CustomMenuItem onClick={handleClose}>
            <a href='https://blog.cloudflare.com/d1-turning-it-up-to-11/'>
              <InsertLinkIcon />
              Reintroducing D1
            </a>
          </CustomMenuItem>
          <CustomMenuItem onClick={handleClose}>
            <a href='https://www.sqlite.org/lang.html'>
              <InsertLinkIcon />
              SQLite SQL Flavour
            </a>
          </CustomMenuItem>
          <CustomMenuItem onClick={handleClose}>
            <a href='https://developers.cloudflare.com/durable-objects/'> 
              <InsertLinkIcon />
              Durable Objects
            </a>
          </CustomMenuItem>
          {windowWidth <= 1021 && (
            <CustomMenuItem>
              <TimeDisplay variant="h6">{currentTime}</TimeDisplay>
            </CustomMenuItem>
          )}
        </CustomMenu>
      </CustomToolbar>
    </NavbarContainer>
  );
};

export default Navbar;
