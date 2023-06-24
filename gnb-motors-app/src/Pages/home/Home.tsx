import React from 'react'
import { Grid, Section, Box, Text, LogoBrand, Button, Services, About, Contact, ErrorBoundries} from '../../Components'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <Section id='#'>
        <Grid
          $col_sm={1}
          $col_lg={2}
          $col_md={1}
          $col_xlg={2}
        >
          <Box $col $gap={64}>
            <Box $col $gap={16}>
              <Text $fs={24} $fs_md={32} $fs_lg={42} $fs_xlg={48} $fw={700} $color={'#FF9736'}>
                Melhor você encontra aqui!
              </Text>
              <Text $fs={18} $fs_md={22} $fs_lg={24} $fs_xlg={28} $color={'#828282'}>
                Sua escolha certa, acelere para o sucesso com nossos carros de primeira linha.
              </Text>
            </Box>

            <Box>
              <Link to={'loja'}>
                <Button $p={16} $br={8} $bg={'#FF9736'} $color={'#ffffff'}>Acesse a loja</Button>
              </Link>
            </Box>
          </Box>

          <Box>
            <ErrorBoundries>
              <ReactPlayer width={'100%'} url="https://vimeo.com/835084068?share=copy" muted={true} playing loop controls={false} />
            </ErrorBoundries>
          </Box>
        </Grid>
      </Section>
      <>
        <LogoBrand />
      </>

      <>
        <Services />
      </>

      <>
        <About />
      </>
     
      <>
        <Contact />
      </>

      <Section></Section>
    </>
  )
}

export default Home