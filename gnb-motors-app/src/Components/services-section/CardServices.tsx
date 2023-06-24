import React from 'react'
import styled from 'styled-components'
import { ServiceProps } from '../../Middleware'
import { Box, Text, Image } from '..'

const CardService = styled.div`
  flex: 1 .8 250px;
  background: white;
  border-radius: 8px;
  height: 100%;
  transition: .3s ease-in-out;
  cursor: pointer;
  box-shadow: 5px 5px 1px #FF9736,
            -5px -5px 1px #ffffff;

  &:hover{
    transform: scale(1.05);
  }
  
`

const CardServices = ({ id, image, title, description }: ServiceProps) => {
  return (
    <CardService>
      <Box key={id} $col>
        <Image src={image} $br={8}/>
        <Box $col $align={'center'} $gap={16} $p={16} $justify={'center'}>
          <Text $fs={16} $fw={600} >{title}</Text>
          <Text $fs={14}>{description}</Text>
        </Box>
      </Box>
    </CardService>
  )
}

export default CardServices