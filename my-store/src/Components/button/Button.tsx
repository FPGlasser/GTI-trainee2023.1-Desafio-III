import React from 'react'
import styled from 'styled-components'

const Button = styled.button<{$contined?: boolean}>`

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border: 1px  solid tomato;
  background-color: ${props => props.$contined ? 'tomato' : 'none' };
  font-size: 1.2rem;
  width: 32px;

`

export default Button