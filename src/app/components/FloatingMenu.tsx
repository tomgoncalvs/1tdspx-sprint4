"use client";
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FloatingMenuContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  background: ${(props) => (props.$isOpen ? 'lightgrey' : '#2e279d')};
  color: white;
  border: none;
  padding: 10px 44px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const MenuItems = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: #fff;
  width: 100px;
  transition: width 0.3s ease;
`;

const MenuItemLink = styled.a`
  padding: 10px;
  text-decoration: none;
  color: #333;
  display: block;
  
  &:hover {
    background-color: #2E279D;
    color: #fff;
    border-radius: 10px;
  }
`;

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FloatingMenuContainer>
      <MenuButton $isOpen={isOpen} onClick={toggleMenu}>☰</MenuButton>

      <MenuItems $isOpen={isOpen}> {/* Aqui estava o erro */}
        <Link href="/" passHref>
          <MenuItemLink onClick={toggleMenu}>Home</MenuItemLink>
        </Link>
        <Link href="/about" passHref>
          <MenuItemLink onClick={toggleMenu}>Cases</MenuItemLink>
        </Link>
        <Link href="/about" passHref>
          <MenuItemLink onClick={toggleMenu}>Time</MenuItemLink>
        </Link>
        <Link href="/about" passHref>
          <MenuItemLink onClick={toggleMenu}>Disciplinas</MenuItemLink>
        </Link>
      </MenuItems>
    </FloatingMenuContainer>
  );
};

export default FloatingMenu;
