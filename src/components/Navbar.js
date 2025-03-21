import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">首页</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">关于我</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">项目</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">联系方式</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar; 