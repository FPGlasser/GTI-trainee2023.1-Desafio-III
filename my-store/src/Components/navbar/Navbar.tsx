import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { Nav, NavBtnContainer, NavList, NavBtn } from './styled/Styled'


function Navbar() {

  const [toggle, setToggle] = useState<string>('toggled')

  const toggleMenu = () => {
    toggle === 'toggled' ? setToggle('') : setToggle('toggled')
  }

  const toggleMenuLink = () => {
    if (toggle !== 'toggled') {
      setToggle('toggled')
    }
  }

  return (
    <Nav>
      <div>
        <h1>Logo</h1>
      </div>

      <NavList className={toggle} onClick={toggleMenuLink}>
        <NavLink to={'/'} > Home </NavLink>
        <NavLink to={'/sobre'} > Sobre </NavLink>
        <NavLink to={'/loja'}> Loja </NavLink>
        <NavLink to={'/contacto'} > Contacto </NavLink>
      </NavList>

      <NavBtnContainer>

        <NavBtn>
          <MdOutlineAccountCircle size={24} />
        </NavBtn>
        
        <NavBtn onClick={toggleMenu}>
          <BiMenu size={24} />
        </NavBtn>

      </NavBtnContainer>
    </Nav>
  )
}

export default Navbar;
