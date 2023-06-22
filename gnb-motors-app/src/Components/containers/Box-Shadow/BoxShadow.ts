import styled from "styled-components"

export const BoxShadow = styled.div<{ $mw?: number, $br?: number, $bg?: string, $color?: string }>`
  max-width: ${({ $mw }) => $mw ? $mw + 'px' : undefined};
  width: 100%;
  background: ${({ $bg }) => $bg ? $bg : undefined};
  border-radius: ${({ $br }) => $br ? $br + 'px' : undefined};
  transition: 0.2s ease-in-out;

  @media screen and (min-width: 769px){
    box-shadow: 2px 2px 5px #bebebe,
            -2px -2px 5px #828080;
            padding: 32px;
  }
`