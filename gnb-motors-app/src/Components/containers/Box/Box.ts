import styled from "styled-components";

const Box = styled.div<{
  $w?: number,
  $w_md?: number,
  $w_lg?: number,
  $w_xlg?: number,
  $flex?: string,
  $col?: boolean,
  $gap?: number,
  $p?: number,
  $justify?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align?: 'baseline' | 'start' | 'center' | 'end' | 'stretch',
  $justify_md?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align_md?: 'baseline' | 'start' | 'center' | 'end' | 'stretch',
  $justify_lg?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align_lg?: 'baseline' | 'start' | 'center' | 'end' | 'stretch',
  $justify_xlg?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align_xlg?: 'baseline' | 'start' | 'center' | 'end' | 'stretch',
}>`
  flex: ${({ $flex }) => $flex ? $flex : ''};
  min-width: ${({ $w }) => $w ? $w : ''};
  width: ${({ $w }) => $w ? $w : ''};
  display: flex;
  flex-direction: ${({ $col }) => $col ? 'column' : 'row'};
  gap: ${({ $gap }) => $gap ? $gap + 'px' : '0px'};
  padding: ${({$p}) => $p ? $p +'px' : ''};

  
  @media screen and (min-width: ${({ theme }) => theme.screen.MediaDevices.md}){
    width: ${({ $w, $w_md }) => $w_md ? $w_md + 'px' : $w ? $w + 'px' : 'auto'};
    justify-content: ${({ $justify, $justify_md }) => $justify_md ? $justify_md : $justify ? $justify : ''};
    align-items: ${({ $align, $align_md }) => $align_md ? $align_md : $align ? $align : ''};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.MediaDevices.lg}){
    width: ${({ $w, $w_lg }) => $w_lg ? $w_lg + 'px' : $w  ? $w + 'px' : 'auto'};
    justify-content: ${({ $justify, $justify_lg }) => $justify_lg  ? $justify_lg : $justify ? $justify : ''};
    align-items: ${({ $align, $align_lg }) => $align_lg ? $align_lg : $align ? $align : ''};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.MediaDevices.xlg}){
    width: ${({ $w, $w_xlg }) => $w_xlg ? $w_xlg + 'px' : $w ? $w + 'px' : 'auto'};
    justify-content: ${({ $justify, $justify_xlg }) => $justify_xlg ? $justify_xlg : $justify ? $justify : ''};
    align-items: ${({ $align, $align_xlg }) => $align_xlg ? $align_xlg : $align ? $align : ''};
  }
`
export default Box;