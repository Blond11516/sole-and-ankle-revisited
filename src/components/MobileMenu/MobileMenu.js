/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MenuDialog aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </MenuDialog>
    </MenuOverlay>
  )
};

const MenuOverlay = styled(DialogOverlay)`
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.gray[700]};
    opacity: 0.8;
    isolation: isolate;
  }
`

const MenuDialog = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  position: relative;
  right: -10px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`

export default MobileMenu;
