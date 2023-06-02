import React from 'react'
import {Section, Grid, } from '../'
import { Box, CardContainer } from '../containers/Containers'

const Footer = () => {
  return (
    <Section style={{backgroundColor: 'tomato'}}>
      <Grid $col_lg={4} $col_xlg={4}>
        <Box>
          <h1>LOGO</h1>
        </Box>
        <CardContainer>
          <h4>Links</h4>
        </CardContainer>
        <CardContainer>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cumque libero delectus quos fugit repellat, consequatur cum mollitia sed dolorum commodi quaerat, assumenda doloribus nesciunt labore perferendis beatae sapiente possimus.
        </CardContainer>
        <CardContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae, sed corporis quibusdam voluptas a tempore quas fuga deserunt totam asperiores ducimus corrupti consequuntur accusamus. Aliquid facilis doloremque ipsum hic.
        </CardContainer>
      </Grid>
    </Section>
  )
}

export default Footer