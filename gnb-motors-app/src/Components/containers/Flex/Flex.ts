import styled from "styled-components";

const Flex = styled.div<{
  $direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse',
  $justify?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align?: 'start' | 'end' | 'center',
  $gap?: number,
  $wrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit'

}>`
  max-width: 1440px;
  width: 100%;
  padding: 16px;
  height: max-content;
  display: flex;
  flex-direction: ${({ $direction }) => $direction ? $direction : 'row'};
  justify-content: ${({ $justify }) => $justify ? $justify : ''};
  align-items: ${({ $align }) => $align ? $align : ''};
  flex-wrap: ${({ $wrap }) => $wrap ? $wrap : 'nowrap'};
  gap: ${({ $gap }) => $gap ? $gap + 'px' : '0px'};
`

export default Flex;