import React from 'react'
import { Grid, Box, Section, Text, BoxShadow, Button } from '../../Components'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
`
const Label = styled.label<{ $fs?: number, $fw?: number }>`
  font-size: ${({ $fs }) => $fs ? $fs : '1rem'};
`

const Input = styled.input<{
  $w?: number,
  $h?: number,
  $p?: number,
  $fs?: number,
  $br?: number,
  $b?: string,
  $color?: string
}>`
  flex: 1;
  width: ${({ $w }) => $w ? $w + 'px' : '100%'};
  height: ${({ $h }) => $h ? $h + 'px' : '28px'};
  padding: ${({ $p }) => $p ? $p + 'px' : null};
  border: 1px solid #6b6b6b;
  border-radius: ${({ $br }) => $br ? $br + 'px' : '0px'};
  color: ${({ $color }) => $color ? $color : null};
  font-size: ${({ $fs }) => $fs ? $fs + 'px' : '1rem'};
  outline: none;

  &:focus{
    border: solid 2px #FF9736;
    color: #FF9736;
  }

`
const TextArea = styled.textarea<{
  $w?: number,
  $h?: number,
  $br?: number
}>`
  width: ${({ $w }) => $w ? $w : '100%'};
  height: 100%;
  resize: none;
  padding: 16px;
  border-radius: ${({ $br }) => $br ? $br + 'px' : '0px'};
  outline: none;
  &:focus{
    border: solid 2px #FF9736;
    color: #FF9736;
  }
`

const Contact = () => {

  return (
    <>
      <Section style={{ gap: '24px' }}>
        <Text $fs={24} $fw={600}>Contacte-nos</Text>

        <BoxShadow $mw={1100} $bg={'#ffffff'} $br={8}>
          <Form>
            <Grid
              $col_md={2}
              $col_lg={2}
              $col_xlg={2}
              $align='start'
            >
              <Box $col $gap={16}>
                <Box $col $gap={8}>
                  <Label htmlFor='name'>Nome</Label>
                  <Input
                    type='text'
                    name='name'
                    autoComplete='none'
                    placeholder='Nome completo'
                    minLength={2}
                    required
                    $p={8}
                    $br={4}
                  />
                </Box>

                <Box $col $gap={8}>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    placeholder='alguem@exemplo.com'
                    autoComplete='none'
                    minLength={6}
                    required
                    $p={8}
                    $br={4}
                  />
                </Box>

                <Box $col $gap={8}>
                  <Label htmlFor='telephone'>Telefone</Label>
                  <Input
                    type='tel'
                    name='telephone'
                    autoComplete='none'
                    placeholder='+55 (00) 999999999'
                    minLength={9}
                    required
                    $p={8}
                    $br={4}
                  />
                </Box>
                <Button $p={12} $bg={'#FF9736'} $br={8} $color={'#ffffff'}>Enviar</Button>
              </Box>

              <Box $col $gap={8}>
                <Label htmlFor='message'>Mensagem</Label>
                <TextArea
                  name='message'
                  autoComplete='none'
                  placeholder="Digite a sua mensagem"
                  rows={11}
                  required
                  minLength={16}
                  $br={4}
                />
              </Box>
            </Grid>
          </Form>
        </BoxShadow>
      </Section>
    </>
  )
}

export default Contact