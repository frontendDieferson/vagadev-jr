import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  height: 35px;
  margin: 44px auto 0px auto;
  background-color: transparent;
  max-width: 1189px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  h6 {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
  }
  @media (max-width: 1240px){
    padding: 0px 18px 0px 18px;
  }
  @media (max-width: 740px){
    min-width: 344px;
    margin-top: 21px !important;
  }
`;

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  .logo-mobile{
    display: none;
  }
  .logo-desktop{
    display: block;
    margin-left: 43px;
  }
  @media (max-width: 740px){
    .logo-desktop{
      display: none;
    }
    .logo-mobile{
    display: block;
    margin-left: 28px;
  }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 740px){
    img {
      width: 30px;
      height: 18px;
    }
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  color: #FFF;
  h6 {
    margin-left: 15px;
    margin-right: 43px;
  }
  img:nth-child(3) {
    margin-right: 39px;
  }
  div {
    img {
      margin-left: 39px;
      margin-right: 6px;
    }
    align-items: center;
    display: flex;
  }
  @media (max-width: 740px){
    img {
      height: 18px;
      margin-left: 0px !important;
      margin-right: 20px !important;
    }
    h6{
      display: none;
    }
    .line{
      display: none;
    }
  }
`;