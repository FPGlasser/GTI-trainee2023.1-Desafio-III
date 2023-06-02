import styled, { css } from "styled-components";

const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: tomato;
  padding-left: 16px;
  padding-right: 16px;
`

const NavList = styled.div`
  
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  gap: 32px;
  background-color: tomato;
  

  @media screen and (max-width: 768px){
    ${props => props.className?.includes('toggled') ?
      css`
        transform: translate(100%);
      `
    :
      css`
        transform: none;
      `
  }
  }
  
 
  @media screen and (min-width: 769px){
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    position: static;
    flex-direction: row;
    gap: 24px;
    padding: 0;
    transform: none;
  }
`

const NavBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none; 
  border: none;
  background: transparent;

  &:hover{
    transform: scale(1.05);
  }

  @media screen and (min-width: 769px){
    display: none;
  }
`

export { Nav, NavList, NavBtnContainer, NavBtn }