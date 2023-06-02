import React from 'react'
import {Card, ProductImg, ProductText, ProductTitle, ProductDescription} from './styled/StyledCard'
import { ProductProps } from '../../setup/Props/Props'


const CardProduct = ({ nome, descricao, preco, img}: ProductProps) => {
  return (
    <Card>
      <ProductImg src={img} alt={nome} />
      <ProductText>
        <ProductTitle>{nome}</ProductTitle>
        <ProductDescription>{descricao}</ProductDescription>
        <ProductTitle>{preco}</ProductTitle>   
      </ProductText>
    </Card>
  )
}

export default CardProduct