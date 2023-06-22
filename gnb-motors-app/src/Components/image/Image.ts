import styled from 'styled-components'

const Image = styled.img<{ $w?: number, $h?: number }>`
  display: block;
  width: ${({ $w }) => $w ? $w : '100%' };
  height: ${({ $h }) => $h ? $h : null  };
`

export default Image;