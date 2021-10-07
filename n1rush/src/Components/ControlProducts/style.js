import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 602px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  @media (max-width: 1200px){
    width: 236.5px !important;
    height: 423px !important;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #3ec6e0;
`;

export const Image = styled.div`
  height: 415px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 1200px){
    width: 236.5px !important;
    img{
      width: 220.5px;
      height: 220.5px;
    }
  }
`;

export const Info = styled.div`
  height: 185px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: flex-start;
  border-radius: 0px 0px 10px 10px;
  color: #084154;
  small{   
    margin-top: 24px;
    margin-left: 36px;
    font-weight: 400;
    font-size: 14px;
  }
  h6{    
    margin-top: 27px;
    margin-left: 36px;
    font-weight: 900;
    font-size: 18px;
  }
  @media (max-width: 1200px){
    width: 100% !important;
    height: 142px !important;
    small{
      margin-top: 16px;
      margin-left: 24px;
    }
    h6{
      margin-left: 24px;
      margin-top: 47px;
    }
  }
  @media (max-width: 660px){ 
    small{
      margin-top:16px;
    }  
    
    h6{
      margin-bottom: 26px;  
      margin-top:17px;
    }    
  }
`;