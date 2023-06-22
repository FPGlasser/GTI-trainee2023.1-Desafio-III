import styled from "styled-components";

const Text = styled.p<{
  $fs?: number,
  $fs_md?: number,
  $fs_lg?: number,
  $fs_xlg?: number,
  $fw?: number,
  $color?: string
}>`
  font-size: ${({ $fs }) => $fs ? $fs + 'px' : '1rem'};
  color: ${({ $color }) => $color ? $color : ''};
  font-weight: ${({ $fw }) => $fw ? $fw : 'normal'};

  
  @media screen and (min-width: 481px){
    font-size: ${({$fs, $fs_md})=> $fs_md !== undefined ? $fs_md + 'px' : $fs !== undefined ? $fs + 'px' : '1rem'};
  }

  @media screen and (min-width: 769px){
    text-align: start;
    font-size: ${({$fs, $fs_lg}) => $fs_lg !== undefined ? $fs_lg + 'px' : $fs !== undefined ? $fs + 'px' : '1rem'};
  }

  @media screen and (min-width: 1024px){
    font-size: ${({$fs, $fs_xlg})=> $fs_xlg !== undefined ? $fs_xlg + 'px' : $fs !== undefined ? $fs + 'px' : '1rem'};
  }
`

export default Text;