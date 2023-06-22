import styled from 'styled-components'

const Grid = styled.div<{
  $row?: number,
  $col_sm?: number,
  $col_md?: number,
  $col_lg?: number,
  $col_xlg?: number,
  $justify?: 'baseline' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  $align?: 'start' | 'end' | 'center',
  $gap?: number
}>`
    max-width: 1440px;
    width: 100%;
    display: grid;
    justify-content: ${({ $justify }) => $justify ? $justify : 'center'};
    align-items: ${({ $align }) => $align ? $align : 'center'};
    grid-template-columns: repeat(${({ $col_sm }) => (
    $col_sm && $col_sm > 0 ? $col_sm : 1)}, 1fr);
    grid-template-rows: repeat(${({$row}) => $row ? $row : 'auto'});
    gap: 8px;
    padding: 16px; 
    gap: ${({ $gap }) => $gap ? $gap + 'px' : 16 + 'px'};
  
    @media screen and (min-width: 481px){
      grid-template-columns: repeat(${({ $col_md }) => (
      $col_md && $col_md > 0 ? $col_md : 2)}, 1fr);
      gap: 16px;
      padding: 16px;
    }
  
    @media screen and (min-width: 769px){
      grid-template-columns: repeat(${({$col_lg}) => (
      $col_lg && $col_lg > 0 ? $col_lg : 3)}, 1fr);
      gap: 24px;
      padding: 16px;
    }
  
    @media screen and (min-width: 1024px){
      grid-template-columns: repeat(${({$col_xlg}) => (
      $col_xlg && $col_xlg > 0 ?$col_xlg : 4)}, 1fr);
      gap: 32px;
      padding: 16px;
    }
  `
export default Grid;