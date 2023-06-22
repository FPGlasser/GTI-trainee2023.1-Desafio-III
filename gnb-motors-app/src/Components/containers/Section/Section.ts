import styled from "styled-components";

const Section = styled.div<{ $bg?: string }>`
  width: 100%;
  background-color: ${({ $bg }) => $bg ? $bg : ''};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: none;
`

export default Section;