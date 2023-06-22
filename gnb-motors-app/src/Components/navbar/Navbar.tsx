import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MdMenu, MdOutlineAccountCircle } from 'react-icons/md'
import { Box, Section } from '../'
import NavItems from '../../Middleware/app-data/NavLinks.json'
import logo from '../../Assets/svg/logo.svg'


const Header = styled.header`

  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 16px;
  z-index: 9999;
`

const Logo = styled.div`
`

const MaskLayer = styled.div<{ $visible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60px;
  left: 0;
  right: 0;
  display: ${({ $visible }) => $visible ? 'flex' : 'none'};
  flex-direction: column;
  background-color: #000000c3;
  gap: 32px;
  z-index: 997;


  @media screen and (min-width: 769px) {
    display: none;
  }
  
`
const Nav = styled.nav<{ $toggled: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  background-color: #ec270c;
  gap: 32px;
  z-index: 998;
  transition: all 300ms;
  transform: ${({ $toggled }) => $toggled ? 'translateX(0)' : 'translateX(-120%)'};

  @media screen and (min-width: 769px){
    position: static;
    flex-direction: row;
    justify-content: center;
    width: max-content;
    gap: 24px;
    background-color: transparent;
    padding-top: 0px;
   
    
    transform: translateX(0);
  }
`

const HamburguerBtn = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.MediaDevices.lg}) {
    display: none;
  }

`



const Navbar = () => {

  const [isToggled, setToggle] = useState<boolean>(false);

  const navbarToggle = () => {
    setToggle(!isToggled)
  }

  const navbarToggleFalse = () => {
    setToggle(false)
  }

  return (
    <Section style={{ position: 'fixed', top: 0, height: '60px', borderBottom: '1px solid #b7b7b7', zIndex: 9999 }} $bg='#ec270c'>
      <Header>
        <Logo onClick={navbarToggleFalse}>
          <NavLink to={'/'}>
            <img src={logo} alt="" />
          </NavLink>
        </Logo>

        <MaskLayer $visible={isToggled} onClick={navbarToggleFalse} />

        <Nav $toggled={isToggled} onClick={navbarToggleFalse}>
          {
            NavItems.map((item) => (
              <NavLink to={item.link} key={item.id} style={({ isActive }) => (
                {
                  textDecoration: 'none',
                  fontSize: '1rem',
                  color: isActive ? '#FFFFFF' : '#efefe4d5',
                  fontWeight: isActive ? 600 : 400
                }
              )}>{item.name}</NavLink>
            ))
          }
        </Nav>

        <Box $gap={24} style={{ cursor: 'pointer' }}>
          <Box>
            < MdOutlineAccountCircle size={24} color={'#FFFFFF'} />
          </Box>
          <HamburguerBtn>
            <MdMenu size={24} color={'#FFFFFF'} onClick={navbarToggle} />
          </HamburguerBtn>
        </Box>
      </Header>
    </Section>
  )
}

export default Navbar