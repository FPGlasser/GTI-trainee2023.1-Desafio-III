import React from 'react'
import { Section, Grid, Flex, Box, Button, Text } from '../'
import { NavLink, Link } from 'react-router-dom'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { MdOutlineEmail, MdOutlineCall } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'
import NavItems from '../../Middleware/app-data/NavLinks.json'
import logo from '../../Assets/svg/logo.svg'
import { styled } from 'styled-components'


const Input = styled.input`
  height: 36px;
  width: 100%;
  outline: none;
  padding: 6px;
  border: 1px solid #ffffff;

  &:focus{
    border: 1px solid #FF9736;
  }
`

const Footer = () => {
  return (
    <Section $bg='#ec270c' style={{ padding: '32px 0px' }}>
      <Grid $col_sm={1} $col_md={2} $col_lg={4} $col_xlg={4} $gap={32}>
        <Box $col>
          <Box>
            <Link to={'/'}>
              <img src={logo} alt="" style={{ maxWidth: '180px' }} />
            </Link>
          </Box>

          <p style={{ color: '#ffffffbd' }}>Potência, elegância e confiança: sua escolha certa. Acelere para o sucesso com nossos carros de primeira linha.</p>
          <Box $gap={16} style={{ marginTop: '16px' }}>
            <AiFillFacebook size={20} color='#ffffffd6' />
            <AiFillLinkedin size={20} color='#FFFFFFd6' />
            <AiFillInstagram size={20} color='#FFFFFFd6' />
          </Box>
        </Box>


        <Box $justify='center' >
          <Box $col $gap={8}  style={{backgroundColor: 'blue', textAlign: 'center'}}>
            <Text $fs={20} $fw={700} $color={'#FF9736'}>Links</Text>
            {
              NavItems.map(item => (
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

          </Box>
        </Box>


        <Box $col $gap={16}>
          <Text $fs={20} $fw={700} $color={'#FF9736'}>Contacto</Text>
          <Box $gap={8}>
            <MdOutlineEmail size={20} color='#ffffffd6' />
            <Text $color={'#ffffffbd'}>g95.motors@contacto.org</Text>
          </Box>
          <Box $gap={8}>
            <MdOutlineCall size={20} color='#ffffffd6' />
            <Text $color={'#ffffffbd'}>+55 (85) 9999999999</Text>
          </Box>
          <Box $gap={8}>
            <IoLocationOutline size={20} color='#ffffffd6' />
            <Text $color={'#ffffffbd'}>Campus de pici s/n Fortaleza, CE</Text>
          </Box>
        </Box>


        <Box $col $gap={16}>
          <Text $color={'#ffffffbd'}>Assine nossa newsletter para receber novidades.</Text>
          <Input type='email' placeholder='alguem@example.com' />
          <Button $p={12} $bg={'#FF9736'} $color={'white'} $br={4}>Assinar</Button>
        </Box>
      </Grid>
    </Section >
  )
}

export default Footer