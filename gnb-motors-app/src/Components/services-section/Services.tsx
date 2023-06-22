import React from 'react'
import services from '../../Middleware/app-data/services.json'
import { Section, Grid, Text } from '../'
import CardServices from './CardServices'

const Services = () => {
  return (
    <Section>
      <Text $fs={24}>Serviços</Text>
      <Text>Oferecemos serviços de qualidade e diferenciados para os nossos clientes</Text>
      <Grid $align={'start'} $col_lg={4} >
        {
          services.map((item) => (
            <CardServices {...item} />
          ))
        }
      </Grid>
    </Section>
  )
}

export default Services