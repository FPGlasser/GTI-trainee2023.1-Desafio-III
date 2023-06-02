import React from 'react'
import styled from "styled-components"
import { SiMercedes, SiFord, SiToyota, SiBmw, SiTesla, SiHonda, SiVolkswagen, SiChevrolet } from 'react-icons/si'

const LogoContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

`

const LogoBox = styled.div`
  width: 24px;

  @media screen and (min-width: 480px){
    width: 36px;
  }

  @media screen and (min-width: 768px){
    width: 48px;
  }

  @media screen and (min-width: 1023px){
    width: 56px;
  }

  @media screen and (min-width: 1024px){
    width: 64px;
  }

  
`


const LogoBrand = () => {
  return (
    <LogoContainer>
      <LogoBox>
        <SiMercedes size={'100%'} color='#828282' />
      </LogoBox>
      <LogoBox>
        <SiFord size={'100%'} color='#828282'/>
      </LogoBox>
      <LogoBox>
        <SiToyota size={'100%'} color='#828282' />
      </LogoBox>
      <LogoBox>
        <SiBmw size={'100%'} color='#828282'/>
      </LogoBox>

      <LogoBox>
        <SiTesla size={'100%'} color='#828282'/>
      </LogoBox>
      <LogoBox>
        <SiHonda size={'100%'} color='#828282'/>
      </LogoBox>
      <LogoBox>
        <SiVolkswagen size={'100%'} color='#828282'/>
      </LogoBox>
      <LogoBox>
        <SiChevrolet size={'100%'} color='#828282'/>
      </LogoBox>
    </LogoContainer>
  )
}

export default LogoBrand