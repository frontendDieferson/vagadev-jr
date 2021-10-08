import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }
`;

export const Slider = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  display: flex;
`;
export const Image = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 840px;
  background: url(${(props) => props.desktopImage}) no-repeat center center;
  -webkit-background-size:cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin:auto auto auto auto;
  @media (max-width: 660px){
    height: 436px;
    width: 100%;
    background: url(${(props) => props.mobileImage}) no-repeat center center;
    -webkit-background-size:cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin:auto auto auto auto;
    #gap{
      width: 100%;
      height: 50%;
    }
  }
`;

export const Details = styled.div`
  max-width: 460px;
  color: #ffffff;
  text-align: right;
  margin-left: 55%;
  margin-top: 209px;
  position: relative;
  width: 100%;
  h3 {
    font-weight: 900;
    font-size: 46px;
    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    font-size: 16px;
  }
  @media (max-width: 1100px){
    margin-left: 45%;
  }
  @media (max-width: 880px){
    margin-left: 25%;
  }
  @media (max-width: 660px){
    max-width: 100%;
    padding: 14px 29px 14px 29px;
    height: 50%;
    width: 100%;
    margin:  0px auto auto auto !important;
    background-color: rgba(0,0,0,0.6);
    margin-top: 50%;
    h3{
      font-size: 26px;
    }
    p{
      font-size: 12px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #3ec6e0;
  h1 {
    font-weight: 900;
    font-size: 70px;
    padding: 0;
  }
  small {
    margin-top: 40px;
    font-size: 40px;
    font-weight: 900;
  }
  @media (max-width: 660px){
    h1{
      font-size: 48px;
    }
    small{
      font-size: 28px;
      margin-top: 5px;
    }
  }
`;