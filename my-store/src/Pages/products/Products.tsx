import React, { useEffect, useState } from 'react'
// import data from '../../data/Cars.json'
import { Banner, Box, CardProduct } from '../../Components'
import { Section, Grid, Flex } from '../../Components'
import { ProductProps, RequestErrorProps } from '../../setup/Props/Props';
import { useNavigate } from 'react-router-dom';
import {LogoBrand} from '../../Components'

const Products = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<ProductProps[]>();
  const [error, setError] = useState(null);
  const [errorDetail, setErrorDetail] = useState<RequestErrorProps>()
  const [rand, setRand] = useState<number>(0)

  useEffect(() => {
    fetch('https://apitrainees.herokuapp.com/carros')
      .then(res => {
        if (!res.ok) {
          setErrorDetail({code: res.status, message: res.statusText})
          throw new Error();
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        const r = Math.random() * ((data.length - 1));
        setRand(Math.floor(r))
      })
      .catch(err => {
        console.error(err)
        navigate('/error', {state:{...errorDetail, err}})
    })
  }, [])


  if (data !== undefined) {
    return (
      <>
        <Section>
          <Banner {...data[rand]} />
        </Section>
        <Section>
         <LogoBrand />
        </Section>
        <Section>
          <Grid>
            {
              data.map((current, index) => (
                <CardProduct {...current} key={index} />
              ))
            }
          </Grid>
        </Section>
      </>
    )
  }

  return (
    <>
     
    </>
    )

}

export default Products