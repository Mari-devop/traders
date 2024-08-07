import React, { useState } from 'react';
import { SidebarContainer, SidebarLink, LinkBox, LogoContainer, HamburgerButton } from './Sidebar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleSidebar}>
        <MenuIcon />
      </HamburgerButton>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <p className='nt-sidebar__logo'>
            <span className='nt-sidebar__logo--bold'>Northwind</span> Traders
          </p>
        </LogoContainer>
        <LinkBox>
          <p className='nt-sidebar__divider'>general</p>
          <SidebarLink to="/" onClick={toggleSidebar}>
            <HomeIcon />
            Home
          </SidebarLink>
          <SidebarLink to="/dashboard" onClick={toggleSidebar}>
            <DisplaySettingsIcon />
            Dashboard
          </SidebarLink>
          <p className='nt-sidebar__divider'>backoffice</p>
          <SidebarLink to="/suppliers" onClick={toggleSidebar}>
            <InventoryIcon />
            Suppliers
          </SidebarLink>
          <SidebarLink to="/products" onClick={toggleSidebar}>
            <ProductionQuantityLimitsIcon />
            Products
          </SidebarLink>
          <SidebarLink to="/orders" onClick={toggleSidebar}>
            <ShoppingCartIcon />
            Orders
          </SidebarLink>
          <SidebarLink to="/employees" onClick={toggleSidebar}>
            <BadgeIcon />
            Employees
          </SidebarLink>
          <SidebarLink to="/customers" onClick={toggleSidebar}>
            <GroupIcon />
            Customers
          </SidebarLink>
          <SidebarLink to="/search" onClick={toggleSidebar}>
            <SearchIcon /> Search
          </SidebarLink>
        </LinkBox>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
