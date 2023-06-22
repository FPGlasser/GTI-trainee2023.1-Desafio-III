import React from 'react'
import styled from 'styled-components'
import { Button, Text } from '../'
import { CarProps } from '../../Middleware'

const Card = styled.div`
  flex: 1 .8 250px;
  background: white;
  border-radius: 16px;
  
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
  }

`

const ProductImg = styled.img`
  width: 100%;
  height: 50%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #1e1e1e;
`

const ProductText = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ProductTitle = styled.p`
  font-family: 'Lucida Sans' sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: black;
`

const ProductDescription = styled.p`
  font-family: 'Lucida Sans' sans-serif;
  color: #999999;
  /* font-size: 13px; */
  display: none;

  @media screen and (min-width: 150px){   
    display: block;
  }
`

const BuyBtn = styled.button`
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #FFFFFF;
  transition: .4;

  &:hover{
    transform: scale(1.05);
  }
`

const CardProduct = ({ img, nome, descricao, preco }: CarProps) => {
  return (
    <Card>
      <ProductImg src={img} alt={nome} />
      <ProductText>
        <ProductTitle>{nome}</ProductTitle>
        <ProductDescription>{descricao}</ProductDescription>
        <ProductTitle>{preco}</ProductTitle>
        <Button $p={8} $bg={'#FF9736'} $br={8} $color={'#ffffff'}>Comprar</Button>
      </ProductText>
    </Card>
   
  )
}

export default CardProduct