import styled from "styled-components";

export const Container = styled.div`
  //position: absolute;
  
  margin: 171px auto auto auto;
  display: flex;
  max-width: 1920px;
  width: 100%;
  min-height: 50px;
  background-color: #3ec6e0;
`;

export const Left = styled.div`
  background-color: #084154;
  display: flex;
  max-width: 547px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 35px;
  img {
    margin-right: 44px;
  }
  
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1373px;
  width: 100%;
  align-items: center;
  color: #ffffff;
  p {
    font-weight: normal;
    font-size: 14px;   
  }
  
`;