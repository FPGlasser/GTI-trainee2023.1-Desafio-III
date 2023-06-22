import React from 'react'
import {Grid, Section, Text} from '../'

const About = () => {
  return (
    <Section>
      <Text>Sobre Nós</Text>
      <Grid $col_md={2} $col_lg={2} $col_xlg={2}>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quibusdam sapiente perspiciatis explicabo. Magni, nisi ipsam itaque magnam laboriosam eveniet officia optio nesciunt velit quae debitis asperiores non, rem vel!</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto unde suscipit, animi minus harum ad doloribus commodi sunt aliquid inventore in repudiandae, voluptatum modi, delectus impedit! Explicabo natus pariatur quas.</Text>
      </Grid>
    </Section>
  )
}

export default About