import styled from "styled-components";

export const App = styled.div`
  font: 400 14px Roboto, sans-serif;
  width: 100%;
  height: 100% !important;
  position: relative;
`;

export const Products = styled.div`
  margin-top: 359px; 
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; 
  @media (max-width: 660px){
    margin-top: 42px;
    margin-left: 22px;
  }
`;

export const Title = styled.div` 
  display: flex;
  max-width: 1920px;
  margin: auto auto auto auto;
  width: 100%;
  img{
    margin-left: 50px;
    
  }
  h2 {
    font-size: 36px;
    font-weight: 300;
    line-height: 42px;
    text-align: left;
    color: #084154;
    margin-left: 22px;
  }
  @media (max-width: 1200px){
    img{
      margin-left: 10px;
    }
  }
  @media (max-width: 660px){
    h2{
      font-size: 18px;
      font-weight: 300;
    }
  }
    
`;