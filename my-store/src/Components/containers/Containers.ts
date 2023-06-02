import styled from "styled-components"



const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6347;
`

const Main = styled.main`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 64px;
  gap: 32px;
  @media screen and (min-width: 768px){
    padding: 4rem;
  }
`

const Grid = styled.div<{
  $row?: number, 
  $col_sm?: number,
  $col_md?: number,
  $col_lg?: number,
  $col_xlg?: number 
  }>`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${ (props) => (
    props.$col_sm !== undefined && props.$col_sm > 0 ? props.$col_sm : 1)}, 1fr);
  grid-template-rows: repeat(${props => props.$row !== undefined ? props.$row : 'auto'});
  gap: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 480px){
    grid-template-columns: repeat(${(props) => (
      props.$col_md !== undefined && props.$col_md > 0 ? props.$col_md : 2)}, 1fr);
    gap: 16px;
    padding: 16px;
  }

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(${(props) => (
      props.$col_lg !== undefined  && props.$col_lg > 0  ? props.$col_lg : 3)}, 1fr);
    gap: 24px;
    padding: 16px;
    justify-self: center;
    align-self: center;
  }

  @media screen and (min-width: 980px){
    grid-template-columns: repeat(${(props) => (
      props.$col_xlg !== undefined  && props.$col_xlg > 0  ? props.$col_xlg : 4)}, 1fr);
    gap: 32px;
    padding: 16px;
    justify-self: center;
    align-self: center;
  }
`


const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`


const Flex = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
`
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  text-align: justify;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .4s;
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
  }
`

const Box = styled.div<{$margin?: number, $padding?: number, $gap?: number, $justify?: boolean, $align?: boolean }>`
  flex: 1;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: ${props => props.$justify ? 'center' : 'start'};
  align-content: ${props => props.$align ? 'center' : 'flex-start'};
`




export {Header, Main, Section, Grid, Flex, CardContainer, BtnContainer, Box}
