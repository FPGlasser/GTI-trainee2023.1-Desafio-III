
import React, { useState, useEffect, Suspense } from 'react'
import { FetchCar } from '../../../Middleware'
import { CarProps } from '../../../Middleware'
import { Section, Box, Banner, CardProduct, Grid, Flex, LogoBrand, Text, Button } from '../../../Components'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState<CarProps[]>()
  const [rand, setRand] = useState<number>(0)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setTimeout(() =>

      FetchCar()
        .then(data => {
          setData(data)
          const r = Math.random() * ((data.length));
          setRand(Math.floor(r))
        })
        .catch(error => {
          setError(error)
        })
      , 2000)
  }, [])



  return (
    <Section>
      {
        data !== undefined && error === undefined ?
          <>
            <Banner {...data[rand]} />
            <LogoBrand />
            <Grid>
              {
                data.map((item, index) => <CardProduct {...item} key={index} />)
              }
            </Grid>
          </>
          :
          error !== undefined ?
            <Flex $justify='center' $align='center' style={{ minHeight: 'calc(75vh - 80px)' }}>
              <Box $col $align='center' $gap={24}>
                <Box $col $align='center'>
                  <Text $fs={20} $fw={600} $color='#FF9736'>Ocorreu algum erro</Text>
                  <Text>Não se preocupe se for da nossa parte acredite já estamos a resolver!</Text>
                </Box>
                <Box>
                  <Link to={'/'}>
                    <Button
                      $p={16}
                      $br={8}
                      $bg='#FF9736'
                      $color='#ffffff'
                    >Voltar para home </Button>
                  </Link>
                </Box>
              </Box>
            </Flex>
            :
            <Loader />
      }
    </Section>

  )
}

export default Product