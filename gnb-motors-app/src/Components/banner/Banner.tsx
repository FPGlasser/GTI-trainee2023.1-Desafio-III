import React from 'react'
import { CarProps } from '../../Middleware/props/Props'
import { Grid, Box, Button, Section } from '../'

import styled from "styled-components";

const BannerText = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  gap: 24px;
`

const BannerTitle = styled.p<{ $color?: string }>`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Lucida Sans' sans-serif;
  color: ${({ $color }) => $color ? $color : ''};


  @media screen and (min-width: 480px){
    font-size: 2.4rem;
  }

  @media screen and (min-width: 768px){
    text-align: start;
    font-size: 3rem;
  }

  @media screen and (min-width: 1023px){
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 4rem;
  }
`

const BannerDescription = styled.p`
  font-size: 1rem;
  font-family: 'Lucida Sans' sans-serif;

  @media screen and (min-width: 768px){
    text-align: start;
    font-size: 1.2rem;
  }
`

const BannerImg = styled.img`
  flex: 1;
`


const Banner = ({ nome, descricao, img }: CarProps) => {
  return (
<Section>
    <Grid $col_sm={1} $col_md={1} $col_lg={2} $col_xlg={2}>
      <BannerText>
        <BannerTitle >{nome}</BannerTitle>
        <BannerDescription>{descricao}</BannerDescription>
        <Box>
          <Button $p={16} $bg={'#FF9736'} $br={8} >Comprar</Button>
        </Box>
      </BannerText>
      <BannerImg src={img} alt={nome} />
    </Grid>
</Section>
  )
}

export default Banner