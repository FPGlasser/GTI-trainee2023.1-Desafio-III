import React from 'react'
import { Box, Flex, Grid, Section } from '../'
import {
  SiMercedes,
  SiFord,
  SiToyota,
  SiBmw,
  SiTesla,
  SiHonda,
  SiVolkswagen,
  SiChevrolet
} from 'react-icons/si'

const LogoBrand = () => {
  return (
    <Section>
      <Grid $col_sm={4} $col_md={4} $col_lg={8} $col_xlg={8}>
        <Flex $justify='center'>
          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64} $justify_xlg='center'>
            <SiMercedes size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>

          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiFord size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>

          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiToyota size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>

          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiBmw size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>
          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiTesla size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>
          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiHonda size={'100%'} color='#828282' />
          </Box>
        </Flex>
        <Flex $justify='center'>

          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiVolkswagen size={'100%'} color='#828282' />
          </Box>
        </Flex>

        <Flex $justify='center'>
          <Box $w={36} $w_md={48} $w_lg={56} $w_xlg={64}>
            <SiChevrolet size={'100%'} color='#828282' />
          </Box>
        </Flex>
      </Grid>
    </Section>
  )
}

export default LogoBrand