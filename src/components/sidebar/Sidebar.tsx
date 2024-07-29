import React from 'react';
import { SidebarContainer, SidebarLink, LinkBox, LogoContainer } from './Sidebar.styled';
import SearchIcon from '@mui/icons-material/Search';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <p className='nt-sidebar__logo'>
          <span className='nt-sidebar__logo--bold'>Northwind</span> Traders
        </p>
      </LogoContainer>
      <LinkBox>
        <p className='nt-sidebar__divider'>general</p>
        <SidebarLink to="/">
          <HomeIcon />
          Home
        </SidebarLink>
        <SidebarLink to="/dashboard">
        <DisplaySettingsIcon />
          Dashboard
        </SidebarLink>
        <p className='nt-sidebar__divider'>backoffice</p>
        <SidebarLink to="/suppliers">
          <InventoryIcon />
          Suppliers
        </SidebarLink>
        <SidebarLink to="/products">
          <ProductionQuantityLimitsIcon />
          Products
        </SidebarLink>
        <SidebarLink to="/orders">
          <ShoppingCartIcon />
          Orders
        </SidebarLink>
        <SidebarLink to="/employees">
          <BadgeIcon />
          Employees
        </SidebarLink>
        <SidebarLink to="/customers">
          <GroupIcon />
          Customers
        </SidebarLink>
        <SidebarLink to="/search">
          <SearchIcon /> Search
        </SidebarLink>
      </LinkBox>
    </SidebarContainer>
  );
};

export default Sidebar;
