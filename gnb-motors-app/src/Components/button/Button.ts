import styled from "styled-components";

const Button = styled.button<{
  $w?: number,
  $h?: number,
  $outlined?: boolean,
  $bg?: string,
  $fs?: number,
  $color?: string,
  $p?: number,
  $border?: number,
  $br?: number
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $p }) => $p ? $p + 'px' : 'auto'};
  width: ${({ $w }) => $w ? $w + 'px' : 'auto'};
  height:  ${({ $h }) => $h ? $h + 'px' : 'auto'};
  background-color: ${({ $outlined, $bg }) => $outlined ? 'transparent' : $bg ? $bg : 'white'};
  font-size: ${({ $fs }) => $fs ? $fs : '1rem'};
  color: ${({ $color }) => $color ? $color : 'black'};
  border: ${({ $border, $color }) => $border ? $border + 'px solid' + $color : 'none'};
  border-radius: ${({ $br }) => $br ? $br + 'px' : '0px'};
  cursor: pointer;
  
  &:hover{
    transform: scale(1.05);
  }

`

export default Button;