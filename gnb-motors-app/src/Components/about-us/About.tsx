import React from 'react'
import { Grid, Section, Box, Text, Image } from '../'

const About = () => {
  return (
    <Section>
      <Text $fs={24} $fw={600}>Sobre Nós</Text>
      <Grid $col_md={2} $col_lg={2} $col_xlg={2} $align='start' >
        <Box $col $gap={24} style={{ textAlign: 'justify' }}>
          <Text $fs={20} $fw={600}>Quem Somos ?</Text>
          <Text $textAlign='justify' $fs={18}>
            Somos <strong>GNB-Motors</strong> apaixonados por oferecer uma experiência incomparável aos entusiastas
            de automóveis de luxo. Desde a nossa fundação em 2005, nos estabelecemos como
            uma das principais concessionárias de veículos de prestígio, atendendo a uma
            clientela exclusiva em busca de excelência, estilo e sofisticação. Nosso compromisso
            com a satisfação do cliente é o alicerce de tudo o que fazemos. Nossa equipe dedicada
            de consultores de vendas altamente qualificados está pronta para proporcionar um atendimento
            personalizado, compreendendo suas necessidades e desejos individuais. Com profundo conhecimento dos
            modelos mais cobiçados do mercado e uma paixão pelo mundo automotivo de luxo, estamos preparados para
            orientá-lo em cada etapa da jornada, desde a seleção até a entrega do seu veículo perfeito.
          </Text>
        </Box>

        <Image src='https://images.pexels.com/photos/4173191/pexels-photo-4173191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </Grid>
    </Section>
  )
}

export default About