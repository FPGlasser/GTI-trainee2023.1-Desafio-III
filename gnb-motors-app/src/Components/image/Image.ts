import styled from 'styled-components'

const Image = styled.img<{ $w?: number, $h?: number, $br?: number }>`
  display: block;
  width: ${({ $w }) => $w ? $w : '100%' };
  height: ${({ $h }) => $h ? $h : null  };
  border-radius: ${({$br}) => $br ? $br+'px' : null};
`

export default Image;