import styled from "styled-components";

const BannerText = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  gap: 24px;

`

const BannerTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Lucida Sans' sans-serif;

  @media screen and (min-width: 480px){
    font-size: 2.4rem;
  }

  @media screen and (min-width: 768px){
    text-align: start;
    font-size: 3rem;
  }

  @media screen and (min-width: 1023px){
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1024px){
    
  }
`

const BannerDescription = styled.p`
  font-size: 1rem;
  font-family: 'Lucida Sans' sans-serif;

  @media screen and (min-width: 768px){
    text-align: start;
    font-size: 1.2rem;
  }
`

const BannerImg = styled.img`
  flex: 1;
`

const BannerBtn = styled.button`
  flex: 1;
  max-height: 60px;
  padding: 16px 8px;
  display:  flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: tomato;
  color: #ffff;
  border-radius: 4px;
  align-self: center;

  @media screen and (min-width: 480px){
    width: 150px;
  }
  @media screen and (min-width: 768px){
   align-self: auto;
  }
  @media screen and (max-width: 468px){
    align-self: center;
    width: 100%;
  }
`


export { BannerText, BannerTitle, BannerDescription, BannerImg, BannerBtn }