import React from 'react'
import { Box, Flex } from '../../../Components'
import { keyframes, styled } from 'styled-components'
import rect from '../../../Assets/svg/rectangle_m@2x.svg'
import Keyframes from 'styled-components/dist/models/Keyframes'

const keyframe = keyframes`
 0%{
  transform: scale(.9);
 }
 33.33%{
  transform: scale(0);
 }
 66.66%{
  transform: scale(1.1);
 }
`

const LoadingImg = styled.img<{ $keyframe?: Keyframes }>`
  transition: .25s;
  animation: ${({ $keyframe }) => $keyframe ? $keyframe : ''} 1s ease-in-out infinite;
`

const Loader = () => {
  return (
    <Flex
      $justify={'center'}
      style={{ minHeight: 'calc(100vh - 60px)' }}>
      <Box $w={24}>
        <LoadingImg src={rect} $keyframe={keyframe} />
        <LoadingImg src={rect} $keyframe={keyframe} />
        <LoadingImg src={rect} $keyframe={keyframe} />
      </Box>
    </Flex>
  )
}

export default Loader