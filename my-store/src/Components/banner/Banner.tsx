import React from 'react'
import { BannerText, BannerTitle, BannerDescription, BannerImg, BannerBtn  } from './styled/styled'
import { ProductProps } from '../../setup/Props/Props'
import { Grid } from '../containers/Containers'
import Button from '../button/Button'

const Banner = ({img, nome, descricao}: ProductProps) => {
  return (
    <Grid $col_sm={1} $col_md={1} $col_lg={2} $col_xlg={2}>
      <BannerText>
        <BannerTitle>{nome}</BannerTitle>
        <BannerDescription>{descricao}</BannerDescription>
        <BannerBtn>Comprar</BannerBtn>
      </BannerText>
      <BannerImg src={img} alt={nome}/>
    </Grid>
  )
}

export default Banner