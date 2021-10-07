import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(8, 65, 84, 0.62);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;  
  `

export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffff;
    height: 500px;
    width: 400.21px;
    border-radius: 5px;
    
  
    img:first-child {
    position: absolute;
    width: 35.36px;
    height: 35.36px;
    padding: 5px;
    display: flex;
    align-self: flex-end;
    margin-bottom: 436px;
    cursor: pointer;
    transform: transition all 0.5s;
    
  }
  img:first-child:hover {
    opacity: .7;
  }
  img:last-child {
    position: absolute;
    width: 217.11px;
    height: 279px;
    left: 88.05px;
    top: 235px;
  } 
  @media (max-width: 660px){
    margin-left: 30px !important;
    margin-right: 26px !important;
}
;
`
export const Info = styled.div`
  top: 115px;
  position: absolute;
  display: flex;
  width: 100%;
  min-width: 400px;
  min-height: 95px;
  align-items: center;
  justify-content: space-between;
  h4 {
    width: 245.13px;
    height: 79px;
    left: 73px;
    top: 115px;
    font-weight: 300;
    font-size: 30px;
    text-align: center;
    color: #084154;
  }
  div {
    height: 1px;
    background-color:#084154;
  }
  div:first-child{
    min-width: 65px;
  }
  div:last-child{
    min-width: 74px;
  }
`