import styled from "styled-components";

export const Container = styled.div`
  z-index: -100 !important;
  min-height: 267px;
  min-width: 556px;
  z-index: 10;
  position: absolute;
  left: -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 37px;
  display: ${props => props.show};
  transition: all 0.5s;

  @media (max-width: 1240px){
    left: -12px;
  }

  @media (max-width: 660px){
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    height: 100vh !important;
    min-height: 100% !important;
    background-color: #084154;
  }
`;

export const Arrow = styled.div`
position: relative;
background-color: #3ec6e0;
width: 18px;
height: 18px;
transform: rotate(-45deg) !important;
top: 9px;
left: 30px;
@media (max-width: 660px){
    display: none;
  }
;

`

export const Content = styled.div`
  position: relative;
  background-color: #084154;
  width: 100%;
  border-radius: 5px;
  border: solid 2px #3ec6e0;
  height: 249px;
  z-index: 11;
  margin-bottom: 0px;
  box-shadow: 10px 10px #3ec6e0;
  display: flex;
  padding: 45px 15px 45px 15px;
  align-items: flex-start;
  justify-content: space-between;
  ul{
      list-style: none;
      li:first-child{
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
      li{
        padding: 0px 15px 0px 15px;
        display: flex;
        align-items: center;
        width: 166px;
        height: 33px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 400;
        transition: all ease-out 300ms;
      }
      li:hover:not(li:first-child){
        background-color: #3ec6e0;
        cursor: pointer;
        border-radius: 5px;
      }

  }

  @media (max-width: 660px){
    border: none;
    box-shadow: none;
    border-radius: 0px;
    padding: 102px 0px 0px 29px;
    flex-direction: column;
    ul{
      li:first-child{
        font-weight: 900;
        font-size: 24px;
        color: #ffffff;
      }
      li{
        width: 317px;
        height: 36px;
        font-weight: 18px;
      }
      div{
        height: 1px;
        width: 100%;
        background-color: #062C38;
        max-width: 320px;
        margin-top: 25px;
        margin-bottom: 25px;
      }
    }
  }
`;
